import React from 'react'
import Button from './Buttons/Button'
import { SettingsOutline , ArrowForwardOutline } from 'react-ionicons'
import { BeakerIcon } from '@heroicons/react/outline'
import ServiceLogo from '../assets/medias/services-logo.jpg'
const Services = () => {
  return (
    <div className='relative w-full ' >
        <div className=' w-full absolute top-0  text-white h-[600px]'>
            <img  src={ServiceLogo} className="w-full h-full"/>
        </div>
        <div className='mx-8 relative  pt-[100px]'>
            <div className='text-center mb-10'>
                <h1 className='text-white text-4xl font-bold'>NOS SERVICES</h1>
            </div>
            <div className='grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-12  flex jsuify-around  w-full flex-wrap'>
                <div className='service-container '>
                   <div className='flex items-center'>
                       <Button className="service-icon" style={{ width: "40px" , height: "40px" }}>
                           <SettingsOutline />
                       </Button>
                       <h1 className='text-2xl font-bold ml-3'>Oriantation</h1>
                   </div>

                   <p className=' text-lg service-description  text-slate-600'>
                         Nous vous accompagnons dans vos demandes d'admissions
                    </p>
                  
                </div>
                <div className='service-container '>
                   <div className='flex items-center'>
                       <Button className="service-icon" style={{ width: "40px" , height: "40px" }}>
                           <SettingsOutline />
                       </Button>
                       <h1 className='text-2xl font-bold ml-3'>Demande d'admission</h1>
                   </div>

                   <p className=' text-lg  service-description  text-slate-600'>
                         Nous vous accompagnons dans vos demandes d'admissions
                    </p>
                    {/* <Button className="bg-yellow-400 mt-3 shadow-sm">
                           En savoir plus
                           <ArrowForwardOutline cssClasses="ml-2"/>
                    </Button> */}
                </div>
                <div className='service-container '>
                   <div className='flex items-center'>
                       <Button className="service-icon" style={{ width: "40px" , height: "40px" }}>
                           <SettingsOutline />
                       </Button>
                       <h1 className='text-2xl font-bold ml-3'>Recherche de logement</h1>
                   </div>

                   <p className=' service-description text-lg text-slate-600'>
                         Nous vous accompagnons dans vos demandes d'admissions
                    </p>
                  
                </div>
                <div className='service-container '>
                   <div className='flex items-center'>
                       <Button className="service-icon" style={{ width: "40px" , height: "40px" }}>
                           <SettingsOutline />
                       </Button>
                       <h1 className='text-2xl font-bold ml-3'>Accueil à l'étranger</h1>
                   </div>

                   <p className=' service-description  text-lg text-slate-600'>
                         Nous vous accompagnons dans vos demandes d'admissions
                    </p>
                  
                </div>
                <div className='service-container '>
                   <div className='flex items-center'>
                       <Button className="service-icon" style={{ width: "40px" , height: "40px" }}>
                           <SettingsOutline />
                       </Button>
                       <h1 className='text-2xl font-bold ml-3'>Demande d'admission</h1>
                   </div>

                   <p className='mt-6 service-description text-lg text-slate-600 '>
                         Nous vous accompagnons dans vos demandes d'admissions
                    </p>
                  
                </div>
                <div className='service-container '>
                   <div className='flex items-center'>
                       <Button className="service-icon" style={{ width: "40px" , height: "40px" }}>
                           <SettingsOutline />
                       </Button>
                       <h1 className='text-2xl font-bold ml-3'>Suivi et accompagnement</h1>
                   </div>

                   <p className='mt-3 text-lg service-description text-slate-600'>
                         Nous vous accompagnons dans vos demandes d'admissions
                    </p>
                  
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Services
