import React from 'react'
import { useState } from 'react'
import ENSI_Logo from '../assets/schools/ensi.jpg'
import ISGA_Logo from '../assets/schools/ISGA_Logo.png'
import ENCG_Logo from '../assets/schools/ENCG_Logo.jpg'
// import Button from './Buttons/Button'

import { Button } from 'flowbite-react'

export const Schools = () => {

  let [schools , setSchools] = useState([
    {
      id: 1 , 
      name: "ISGA" , 
      description: "ISGA est une ecole de formation en management d'entreprise" , 
      image: ISGA_Logo
    },
    {
      id: 1 , 
      name: "ENSI" , 
      description: "ENSI est une ecole de formation en management d'entreprise" , 
      image: ENSI_Logo
    },
    {
      id: 1 , 
      name: "ENCG" , 
      description: "L'ENCG est une ecole de formation en management d'entreprise" , 
      image: ENCG_Logo
    }
  ])
  return (
    <div className='mx-5'>
      <h1 className='text-4xl font-bold my-5 text-center'>ECOLES PARTENAIRES</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8  flex jsuify-around  w-full bottom-5 flex-wrap'>
           {
              schools.map( (school , index) =>(
                  <div className='py-2 relative  h-[200px]' key={index} >
                         <img src={school.image} className="w-full h-full"/>
                          <div className='bg-gray-500/50 py-3 absolute h-full w-full top-0 left-0 text-white text-center'>
                              <div className=''>
                                  <h1 className='text-5xl font-bold'>{school.name}</h1>
                              </div>
                              <p className='mt-3 text-lg'>
                                    {school.description}
                              </p>
                              <div className="mt-4">
                                 <Button gradientDuoTone="redToYellow" className="d-inline">Consulter</Button>
                              </div>
                          </div>
                  </div>
              ) )
           }
      </div>
    </div>
  )
}
