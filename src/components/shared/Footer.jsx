import { Button } from 'flowbite-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 p-3 min-h-[100px] top-[105%]  w-full relative'>
       <div className='gap-8 text-white grid grid-cols-1 md:grid-cols-3'>
            <div>
                <h1 className='text-xl text-semi-bold text-blue-400'>Nous joindre</h1>

                <div className='text-sm mt-3'>
                    <h4 className='my-1'>Tel: 05785699</h4>
                    <h4 className='my-1'>email: beni@test.ma</h4>

                    <div className="mt-5">
                        <Button>
                            <a href="/#contact-container">CONTACTEZ</a>
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl  text-semi-bold text-blue-400'>Nos services</h1>

                <ul className='text-sm mt-3 text-slate-600 cursor-pointer'>
                    <li className='my-1 hover:text-gray-400'>Orientation</li>
                    <li className='my-1 hover:text-gray-400'>Demande d'admission</li>
                    <li className='my-1 hover:text-gray-400'>Recherche de logement</li>
                    <li className='my-1 hover:text-gray-400'>Accueil à l'étranger</li>
                    <li className='my-1 hover:text-gray-400'>Suivi et accompagnement</li>
                </ul>
            </div>
       </div>
    </div>
  )
}

export default Footer
