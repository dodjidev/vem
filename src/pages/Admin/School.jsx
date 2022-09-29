import React, { useRef, useState } from 'react'
import { Checkbox, Table , Modal, Button, TextInput, Textarea } from 'flowbite-react'
import { useSelector , useDispatch } from 'react-redux'
import { AddSchool } from '../../components/School/AddSchool'

import { TrashBinOutline , EyeOutline , CreateOutline  , AddCircleOutline} from 'react-ionicons'
import { schoolsList , fetchSchools , removeSchool} from '../../features/schools/schoolsSlice'
import { useEffect } from 'react'

export const SchoolAdmin = () => {
  const list = useSelector(schoolsList)

  console.log('lisssst:', list)
  let [selected ,  setSelected] = useState(0)
  let [newItem , setNewItem] = useState(false)
  
  const dispatch = useDispatch()
  const onSaved = ()=> setNewItem(false)
  const onUpdate = (id)=>{
    setSelected(id);
    setNewItem(true)
  }
  const onRemove = (id)=>{
    dispatch(removeSchool(id))
  }
 
  useEffect( ()=> {
       dispatch(fetchSchools())
  },[])

  return (
    <div>
          <div className='flex justify-between items-center flex-wrap'>
             <h3 className='mb-10 text-xl font-semibold'>Liste des écoles</h3>
             <AddCircleOutline onClick={()=>onUpdate(0)} />
          </div>
          <Table striped>
              <Table.Head>
                  <Table.HeadCell>
                       <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Label</Table.HeadCell>
                  <Table.HeadCell>Description</Table.HeadCell>
                   <Table.HeadCell>Formations</Table.HeadCell>
                  <Table.HeadCell>Diplomes</Table.HeadCell>
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
                                {item.description}
                             </p>
                          </Table.Cell>
                           <Table.Cell>
                             {item?.Formations && (
                                    item.Formations.map((formation , index) => (
                                      <span className="bg-fuchsia-100 text-fuchsia-500 mr-2 px-2 rounded" key={index}>{formation.label}</span>
                                    ))
                              )}
                          </Table.Cell>
                        <Table.Cell>
                             {item?.Degrees && (
                                    item.Degrees.map((degree , index) => (
                                      <span className="bg-slate-100 text-slate-500 mr-2 px-2 rounded" key={index}>{degree.label}</span>
                                    ))
                              )}
                          </Table.Cell>   
                          <Table.Cell>
                              <EyeOutline title='Détail' color='indigo' width={'18px'} cssClasses='text-blue-500 mx-1 hidden'/>
                              <CreateOutline title='Modifier' color='blue' width={'18px'} cssClasses='text-blue-500  mx-1 ' onClick={()=>onUpdate(item.id)}/>
                              <TrashBinOutline title="Supprimer" color='red' width={'18px'} cssClasses='text-blue-500  mx-1' onClick={()=>onRemove(item.id)}/>
                          </Table.Cell>
                      </Table.Row>
                   )): <Table.Row>
                          <Table.Cell colSpan={4}> <h3 className='text-center'>Aucune école</h3></Table.Cell>
                       </Table.Row>
                 }
              </Table.Body>
          </Table>
          { newItem && <AddSchool itemID={selected} onCancel={onSaved}/> }
    </div>
  )
}
