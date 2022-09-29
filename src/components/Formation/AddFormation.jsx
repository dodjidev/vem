import { Button, Modal, Textarea, TextInput } from 'flowbite-react'
import React, { useState , useEffect } from 'react'
import { FileUploader } from '../shared/FileUploader'
import  { useDispatch , useSelector } from 'react-redux'
import Select from 'react-select'
import { addFormation , createOrUpdateFormation , fetchOneFormation } from '../../features/formations/formationSlice'
import { degreesList , fetchDegrees} from '../../features/degrees/degreeSlice'
import { schoolsList , fetchSchools} from '../../features/schools/schoolsSlice'

export const AddFormation = (props) => {
  let [inputs , setInputs] = useState({image: '' , label: "" , description: ""})
  let [show , setShow] = useState(true)
  const degrees = useSelector(degreesList)
  const schools = useSelector(schoolsList);
  let dispatch = useDispatch();
  let  { onCancel , itemID} = props
  let [isFetch , setIsFetch] = useState(false)
  const onImputChanged = (e)=>{ 
        setInputs(inputs=>({...inputs, [e.target.name]: e.target.value}))
  }

  const onModalClosed = () => onCancel()

 
  const saveItem = (e)=>{
    e&&e.preventDefault()
    console.log(inputs)
    
    dispatch(createOrUpdateFormation({itemID , ...inputs})).then( res => onCancel())
    
  }

  useEffect(()=>{
       if(!isNaN(itemID) && +itemID > 0)
          dispatch(fetchOneFormation(itemID))
             .then(res => {
                 console.log('service:', res.payload)
                 res = res.payload
                 res.schools = (res.schools || res.Schools || []).map( it => it.id)
                 res.degrees = (res.degrees || res.Degrees || []).map(it => it.id)
                 setIsFetch(true)  
                 setInputs(res)
             })
             .catch( err => console.log('err:', err))   
        else  setIsFetch(true)   
        dispatch(fetchDegrees())          
        dispatch(fetchSchools())                     
  }, [])

  const onImageChoosed = (bgImage)=>  setInputs(inputs=>({...inputs, bgImage}))

  const onItemSelected = (data , name)=>{
    let fData = [];
    data.forEach( it => fData.push(it.id))
    setInputs(inputs=>({...inputs, [name]: fData}))
  }
  
  return (
    <div>
            <Modal show={show} size='2xl'  onClose={onModalClosed}>
                <Modal.Header>
                    <strong>{itemID ? "Formation: "+inputs.label : "Nouvelle formation"}</strong>
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
                            <div className='py-5'>
                                <label>Nom de la formation</label>
                                <TextInput name="label" value={inputs.label}  onChange={onImputChanged} placeholder='Intitulé'/>
                            </div>
                            <div className='py-5'>
                                <label>Description</label>
                                <Textarea value={inputs.description}   name="description" onChange={onImputChanged} placeholder='Intitulé' rows="4"></Textarea>
                            </div>
                            {isFetch && <div className='py-5'>
                               <label>Diplomes possible</label>
                               <Select 
                                        options={degrees} 
                                        isMulti 
                                        onChange={(data) => onItemSelected(data ,  'degrees')}
                                        getOptionLabel = {(opt => opt.label)}
                                        getOptionValue = {(opt => opt.id)}
                                        defaultValue = {inputs.Degrees}
                                      />
                            </div>
                            }
                            {isFetch && <div className='py-5'>
                               <label>Ecoles</label>
                               <Select 
                                        options={schools} 
                                        isMulti 
                                        onChange={(data) => onItemSelected(data ,  'schools')}
                                        getOptionLabel = {(opt => opt.label)}
                                        getOptionValue = {(opt => opt.id)}
                                        defaultValue = {inputs.Schools}
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
