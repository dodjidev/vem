import { Button, Modal, Textarea, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { FileUploader } from '../shared/FileUploader'
import  { useDispatch } from 'react-redux'

import { createOrUpdateService, fetchOneServices } from '../../features/services/serviceSlice'
import { useEffect } from 'react'
import { info } from 'autoprefixer'

export const AddService = (props) => {
  let [inputs , setInputs] = useState({ label: "" , description: "" , bgImage: ''})
  let [show , setShow] = useState(true)

  let dispatch = useDispatch();
  let  { onCancel , itemID} = props
  
  const onImputChanged = (e)=>{ 
        setInputs(inputs=>({...inputs, [e.target.name]: e.target.value}))
  }

  const onModalClosed = () => onCancel()

  const saveItem = (e)=>{
    e&&e.preventDefault()
    console.log(inputs)

    dispatch(createOrUpdateService({itemID , ...inputs})).then( res => onCancel())
    
  }

  useEffect(()=>{
       if(!isNaN(itemID) && +itemID > 0)
          dispatch(fetchOneServices(itemID))
             .then(res => {
                 console.log('service:', res.payload)
                 setInputs(res.payload)
             })
             .catch( err => console.log('err:', err))               
  }, [])

  const onImageChoosed = (bgImage)=>  setInputs(inputs=>({...inputs, bgImage}))

  
  return (
    <div>
            <Modal show={show} size='2xl'  onClose={onModalClosed}>
                <Modal.Header>
                   <strong>{itemID ? "Service: "+inputs.label : "Nouveau service"}</strong>
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
                                    <div className='mb-5'>
                                        <label>Intitulé du servive</label>
                                        <TextInput name="label" value={inputs.label} onChange={onImputChanged} placeholder='Intitulé'/>
                                    </div>
                                    <div className='py-5'>
                                        <label>Description</label>
                                        <Textarea  name="description" value={inputs.description}  onChange={onImputChanged} placeholder='Intitulé' rows="4"></Textarea>
                                    </div>
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
