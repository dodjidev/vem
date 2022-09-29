import React from 'react'
import Glob  from '../assets/medias/about.jpg'

import { Button } from 'flowbite-react'
export const About = () => {
  return (
    <div>
      <div className='h-[400px] bg-gray-400 -mt-10 gap-5 p-5 mb-[100px] flex flex-col items-center justify-center'>
               <h1 className='text-5xl font-bold'>Des experts pour vous accompagner</h1>
               <p className='text-2xl'>dans vos procedures</p>
      </div>
       <div className='md:flex items-center gap-5 justify-around   mx-3'>
               <div className='mt-7 w-full  md:w-1/2'>
                  <img src={Glob} alt="" className=' w-full h-[400px]'/>
               </div>
               <div className='mt-7 ml-5 md:ml-0 md:w-1/3'>
                  <h1 className='text-2xl font-medium text-yellow-400'>Qui somme nous ?</h1>
                  <p className='my-5'>
                      VEM est une plateforme d’orientation des 
                      étudiants, spécialiser dans le conseil et dans l’accompagnement 
                      des candidats souhaitant poursuivre leur étude au Maroc.
                  </p>
                  <Button className='btn bg-indigo-500 text-white text-'>
                     <a href="/#contact-container">CONTACTEZ NOUS</a>
                  </Button>
               </div>
       </div>
    </div>
  )
}
