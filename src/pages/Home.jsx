import { Container } from 'postcss'
import React from 'react'
import { About } from '../components/About'
import { ContactForm } from '../components/ContactForm'
import Degrees from '../components/Degrees'
import { Formations } from '../components/Formations'
import Map from '../components/Map'
import { Schools } from '../components/Schools'
import Services from '../components/Services'

export const HomePage = () => {
  return (
    <div className=''>
      
        <div className="my-[120px]" id="about-container">
            <About />
        </div>
        <div className="my-[100px]" id="services-container">
           <Services />
        </div>
        <div className="my-12" id="schools-container">
           <Schools />
        </div>
        <div className="mt-[150px] mb-[70px]" id="contact-container">
            <ContactForm />
        </div>
            
          
           {/* <Degrees />
            <Formations />  */}
          
       
    </div>
  )
}
