import React, { useEffect, useRef, useState } from 'react'
import { Checkbox, Table , Modal, Button, TextInput, Textarea } from 'flowbite-react'
import { useSelector , useDispatch } from 'react-redux'
import { servicesList , fetchServices , removeService } from '../../features/services/serviceSlice'
import { AddService } from '../../components/Service/AddService'

import { TrashBinOutline , EyeOutline , CreateOutline  , AddCircleOutline} from 'react-ionicons'

export const ServiceAdmin = () => {
  const list = useSelector(servicesList)
  const dispatch = useDispatch()
  let [selectedService ,  setSelectedService] = useState(0)
  let [newService , setNewService] = useState(false)
  
  const onServiceSaved = ()=> setNewService(false)
  const onRemoveService = (id)=> dispatch(removeService(id))
  
  const onUpdate = (id)=>{
       setSelectedService(id);
       setNewService(true)
  }

  useEffect(()=>{
      dispatch(fetchServices());
  },[])

  return (
    <div>
          <div className='flex justify-between items-center flex-wrap'>
             <h3 className='mb-10 text-xl font-semibold'>Liste des services</h3>
             <AddCircleOutline onClick={()=>onUpdate(0)} />
          </div>
          <Table striped>
              <Table.Head>
                  <Table.HeadCell>
                       <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Label</Table.HeadCell>
                  <Table.HeadCell>Description</Table.HeadCell>
                  <Table.HeadCell>Actions</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                 {
                   list.length > 0 ? list.map( (item , index) => (
                      <Table.Row key={index}>
                          <Table.Cell><Checkbox /></Table.Cell>
                          <Table.Cell><strong className='font-medium'>{item.label}</strong></Table.Cell>
                          <Table.Cell className='px-2'>
                             <p className='mew-width' title={item.description}>
                                {item.description.substr(0,100)}...
                             </p>
                          </Table.Cell>
                          <Table.Cell>
                              <EyeOutline title='Détail' color='indigo' width={'18px'} cssClasses='text-blue-500 mx-1'/>
                              <CreateOutline title='Modifier' color='blue' width={'18px'} cssClasses='text-blue-500  mx-1' onClick={()=>onUpdate(item.id)}/>
                              <TrashBinOutline title="Supprimer" color='red' width={'18px'} onClick={()=>onRemoveService(item.id)} cssClasses='text-blue-500  mx-1'/>
                          </Table.Cell>
                      </Table.Row>
                   )): <Table.Row>
                           <Table.Cell colSpan={4}> <h3 className='text-center'>Aucun service enregistré</h3></Table.Cell>
                       </Table.Row>
                 }
              </Table.Body>
          </Table>

          { newService && <AddService itemID={selectedService} onCancel={onServiceSaved}/> }
    </div>
  )
}
