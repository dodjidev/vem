import { Button, Modal, Textarea, TextInput } from 'flowbite-react'
import React, { useState , useEffect} from 'react'
import { FileUploader } from '../shared/FileUploader'
import  { useDispatch , useSelector } from 'react-redux'
import Select from 'react-select'
import {  createOrUpdateDegree , fetchOneDegree}  from '../../features/degrees/degreeSlice'
import { schoolsList , fetchSchools } from '../../features/schools/schoolsSlice'
import {formationsList , fetchFormations} from '../../features/formations/formationSlice'

export const AddDegree = (props) => {
  let [inputs , setInputs] = useState({image: '' , label: "" , description: ""})
  let [show , setShow] = useState(true)
  const schools = useSelector(schoolsList);
  const formations = useSelector(formationsList);
  let [isFetch , setIsFetch] = useState(false)

  let dispatch = useDispatch();
  let  { onCancel , itemID} = props

  const onImputChanged = (e)=>{ 
        setInputs(inputs=>({...inputs, [e.target.name]: e.target.value}))
  }

  const onModalClosed = () => onCancel()

 
  const saveItem = (e)=>{
    e&&e.preventDefault()
    console.log(inputs)
    
    dispatch(createOrUpdateDegree({itemID , ...inputs})).then( res => onCancel())
    
  }

  useEffect(()=>{
       if(!isNaN(itemID) && +itemID > 0)
          dispatch(fetchOneDegree(itemID))
             .then(res => {
                res = res.payload
                res.schools = (res.schools || res.Schools || []).map( it => it.id)
                setIsFetch(true)  
                setInputs(res)
             })
             .catch( err => console.log('err:', err))  
       else  setIsFetch(true) 

       dispatch(fetchFormations())          
       dispatch(fetchSchools())              
  }, [])
  const onImageChoosed = (bgImage)=>  setInputs(inputs=>({...inputs, bgImage}))

  const onItemSelected = (data , name)=>{
    console.log('data:', data)
    if(name == 'formationId'){
      setInputs(inputs=>({...inputs, [name]: data.id}))
      return
    }
    let fData = [];
    data.forEach( it => fData.push(it.id))
    setInputs(inputs=>({...inputs, [name]: fData}))
  }
  
  return (
    <div>
            <Modal show={show} size='2xl'  onClose={onModalClosed}>
                <Modal.Header>
                <strong>{itemID ? "Diplome: "+inputs.label : "Nouveau diplome"}</strong>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={saveItem}>
                      <div className="sm:flex gap-8">
                        <div className='sm:w-1/3 '>
                              <span>Image de couverture</span>
                              {inputs.bgImage && <FileUploader defaultImage={inputs.bgImage} onFinished={onImageChoosed}/>}
                              {!inputs.bgImage && <FileUploader  onFinished={onImageChoosed}/>}
                        </div>
                        <div className="sm:w-2/3">
                              <div className='mb-5'>
                                  <label>Intitulé du servive</label>
                                  <TextInput  value={inputs.label}  name="label" onChange={onImputChanged} placeholder='Intitulé'/>
                              </div>
                              <div className='py-5'>
                                  <label>Description</label>
                                  <Textarea value={inputs.description}  name="description" onChange={onImputChanged} placeholder='Intitulé' rows="4"></Textarea>
                              </div>
                              <div className='py-5'>
                                <label>Formation</label>
                                <Select 
                                          name = "formationId"
                                          options={formations} 
                                          onChange={(data) => onItemSelected(data ,  'formationId')}
                                          getOptionLabel = {(opt => opt.label)}
                                          getOptionValue = {(opt => opt.id)}
                                          defaultValue = {inputs.Formation}
                                        />
                              </div>
                              {
                                isFetch && <div className='py-5'>
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
