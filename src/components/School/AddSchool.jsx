import { Button, Modal, Textarea, TextInput } from 'flowbite-react'
import React, { useState , useEffect } from 'react'
import { FileUploader } from '../shared/FileUploader'
import  { useDispatch , useSelector} from 'react-redux'
import Select from 'react-select'
import { fetchOneSchool , createOrUpdateSchool } from '../../features/schools/schoolsSlice'
import { degreesList, fetchDegrees } from '../../features/degrees/degreeSlice'
import { formationsList , fetchFormations  } from '../../features/formations/formationSlice'

export const AddSchool = (props) => {

  let [inputs , setInputs] = useState({image: '' , label: "" , description: ""})
  let [show , setShow] = useState(true)
  let [isFetch , setIsFetch] = useState(false)
  

  
  const degrees = useSelector(degreesList)
  const formations = useSelector(formationsList)

  let dispatch = useDispatch();
  let  { onCancel , itemID} = props
  
  
  const onImputChanged = (e)=>{ 
        setInputs(inputs=>({...inputs, [e.target.name]: e.target.value}))
  }

  const onModalClosed = () => onCancel()

 
  const saveItem = (e)=>{
    e&&e.preventDefault()
    console.log(inputs)
    
    dispatch(createOrUpdateSchool({itemID , ...inputs})).then( res => onCancel())
    
  }

  useEffect(()=>{
       if(!isNaN(itemID) && +itemID > 0)
          dispatch(fetchOneSchool(itemID))
             .then(res => {
                 console.log('service:', res.payload)
                 res = res.payload
                 res.formations = (res.formations || res.Formations || []).map( it => it.id)
                 res.degrees = (res.degrees || res.Degrees || []).map(it => it.id)
 

                 setInputs(res)


                 setTimeout(()=>  console.log('inputs:', inputs) , 1000)
                 setIsFetch(true)
                
             })
             .catch( err => console.log('err:', err)) 
        else  setIsFetch(true)  
        
        dispatch(fetchDegrees())          
        dispatch(fetchFormations())          
  }, [])

  const onItemSelected = (data , name)=>{
          let fData = [];
          data.forEach( it => fData.push(it.id))
          setInputs(inputs=>({...inputs, [name]: fData}))
  }
  
  const onImageChoosed = (bgImage)=>  setInputs(inputs=>({...inputs, bgImage}))

  return (
    <div className="modal-parent">
            <Modal show={show} size='2xl'  onClose={onModalClosed}>
                <Modal.Header>
                <strong>{itemID ? "Ecole: "+inputs.label : "Nouvelle école partenaire"}</strong>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={saveItem}>
                    <div className="sm:flex gap-8">
                        <div className='sm:w-1/3 '>
                           <span>Image de couverture</span>
                            {inputs.bgImage && <FileUploader defaultImage={inputs.bgImage} onFinished={onImageChoosed}/>}
                            {!inputs.bgImage && <FileUploader  onFinished={onImageChoosed}/>}
                        </div>
                        <div className='sm:w-2/3 '>
                            <div className='pb-5'>
                                <label>Nom de l'école</label>
                                <TextInput value={inputs.label} name="label" required onChange={onImputChanged} placeholder='Intitulé'/>
                            </div>
                            <div className='py-5'>
                                <label>Description</label>
                                <Textarea value={inputs.description}  name="description"  required onChange={onImputChanged} placeholder='Intitulé' rows="4"></Textarea>
                            </div>
                            {isFetch && <div className='py-5'>
                               <label>Diplomes possible</label>
                               <Select 
                                        options={degrees} 
                                        isMulti 
                                        onChange={(data) => onItemSelected(data ,  'degrees')}
                                        getOptionLabel = {(opt => opt.label)}
                                        getOptionValue = {(opt => opt.id)}
                                        defaultValue={inputs.Degrees}
                                      />
                            </div>}
                            {
                             isFetch &&<div className='py-5'>
                               <label>Formations</label>
                               <Select 
                                        options={formations} 
                                        isMulti 
                                        onChange={(data) => onItemSelected(data ,  'formations')}
                                        getOptionLabel = {(opt => opt.label)}
                                        getOptionValue = {(opt => opt.id)}
                                        defaultValue={inputs.Formations}
                                      />
                               </div>
                            }
                            <div className='pt-5 flex lfex-wrap gap-3'>
                                <Button onClick={saveItem}>Enregistrer</Button>
                                <Button  color="failure"  onClick={onCancel}>Annuler</Button>
                            </div>
                        </div>
                    </div>
                           
                           
                    </form>
                </Modal.Body>
            </Modal>
    </div>
  )
}
