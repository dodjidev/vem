import React, { useRef, useState } from 'react'
import { Checkbox, Table , Modal, Button, TextInput, Textarea } from 'flowbite-react'
import { useSelector , useDispatch} from 'react-redux'
import { AddDegree  } from '../../components/Degree/AddDegree'

import { TrashBinOutline , EyeOutline , CreateOutline  , AddCircleOutline} from 'react-ionicons'
import { degreesList , fetchDegrees, removeDegree } from '../../features/degrees/degreeSlice'
import { useEffect } from 'react'

export const DegreeAdmin = () => {
  const list = useSelector(degreesList)
  let [selectedItem ,  setSelectedItem] = useState(0)
  let [newItem , setNewItem] = useState(false)
  
  const dispatch = useDispatch()

  const onSaved = ()=> setNewItem(false)
  const onUpdate = (id)=>{
    setSelectedItem(id);
    setNewItem(true)
  }
  const onRemove = (id)=>{
    dispatch(removeDegree(id))
  }
  useEffect(()=> {
   dispatch(fetchDegrees())
  },[])
  return (
    <div>
          <div className='flex justify-between items-center flex-wrap'>
             <h3 className='mb-10 text-xl font-semibold'>Liste des diplomes</h3>
             <AddCircleOutline onClick={()=>onUpdate(0)} />
          </div>
          <Table striped>
              <Table.Head>
                  <Table.HeadCell>
                       <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Label</Table.HeadCell>
                  <Table.HeadCell>Description</Table.HeadCell>
                  <Table.HeadCell>Formation</Table.HeadCell>
                  <Table.HeadCell>Schools</Table.HeadCell>
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
                             {item?.Formation && (
                                    <span className="bg-fuchsia-100 text-fuchsia-500 mr-2 px-2 rounded" >{item?.Formation.label}</span>
                              )}
                          </Table.Cell>
                          <Table.Cell>
                             {item?.Schools && (
                                    item.Schools.map((school , index) => (
                                      <span className="bg-fuchsia-100 text-fuchsia-500 mr-2 px-2 rounded" key={index}>{school.label}</span>
                                    ))
                              )}
                          </Table.Cell>
                         
                          <Table.Cell>
                              <EyeOutline title='Détail' color='indigo' width={'18px'} cssClasses='text-blue-500 mx-1 hidden'/>
                              <CreateOutline  onClick={()=> onUpdate(item.id)}  title='Modifier' color='blue' width={'18px'} cssClasses='text-blue-500  mx-1'/>
                              <TrashBinOutline onClick={()=> onRemove(item.id)} title="Supprimer" color='red' width={'18px'} cssClasses='text-blue-500  mx-1'/>
                          </Table.Cell>
                      </Table.Row>
                   )): <Table.Row>
                           <Table.Cell colSpan={4}> <h3 className='text-center'>Aucun diplome enregistré</h3></Table.Cell>
                       </Table.Row>
                 }
              </Table.Body>
          </Table>
          { newItem && <AddDegree itemID={selectedItem} onCancel={onSaved}/> }
    </div>
  )
}
