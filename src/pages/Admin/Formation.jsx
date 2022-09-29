import React, { useRef, useState } from 'react'
import { Checkbox, Table , Modal, Button, TextInput, Textarea } from 'flowbite-react'
import { useSelector , useDispatch} from 'react-redux'
import { AddFormation } from '../../components/Formation/AddFormation'
import { TrashBinOutline , EyeOutline , CreateOutline  , AddCircleOutline} from 'react-ionicons'
import { formationsList , fetchFormations , fetchOneFormation, removeFormation} from '../../features/formations/formationSlice'
import { useEffect } from 'react'

export const FormationAdmin = () => {
  const list = useSelector(formationsList)
  let [selectedItem ,  setSelectedItem] = useState(0)
  let [newItem , setNewItem] = useState(false)
  
  const dispatch = useDispatch()
  const onSaved = ()=> setNewItem(false)
  const onUpdate = (id)=>{
    setSelectedItem(id);
    setNewItem(true)
  }
  const onRemove = (id)=>{
    dispatch(removeFormation(id))
  }
  console.log('listtt:',list )
  useEffect(()=> {
       dispatch(fetchFormations())
  },[])
  return (
    <div>
          <div className='flex justify-between items-center flex-wrap'>
             <h3 className='mb-10 text-xl font-semibold'>Liste des formations</h3>
             <AddCircleOutline onClick={()=>setNewItem(true)} />
          </div>
          <Table striped>
              <Table.Head>
                  <Table.HeadCell>
                       <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Label</Table.HeadCell>
                  <Table.HeadCell>Description</Table.HeadCell>
                  <Table.HeadCell>Ecoles</Table.HeadCell>
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
                                {item.description.substr(0,100)}...
                             </p>
                          </Table.Cell>
                          <Table.Cell>
                             {item?.Schools && (
                                    item.Schools.map((school , index) => (
                                      <span className="bg-fuchsia-100 text-fuchsia-500 mr-2 px-2 rounded" key={index}>{school.label}</span>
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
                              <CreateOutline onClick={()=>onUpdate(item.id)} title='Modifier' color='blue' width={'18px'} cssClasses='text-blue-500  mx-1'/>
                              <TrashBinOutline onClick={()=> onRemove(item.id)} title="Supprimer" color='red' width={'18px'} cssClasses='text-blue-500  mx-1'/>
                          </Table.Cell>
                      </Table.Row>
                   )): <Table.Row>
                           <Table.Cell colSpan={4}> <h3 className='text-center'>Aucune formation enregistrée</h3></Table.Cell>
                       </Table.Row>
                 }
              </Table.Body>
          </Table>

          { newItem && <AddFormation itemID={selectedItem} onCancel={onSaved}/> }
    </div>
  )
}
