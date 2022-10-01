import { Button, Label, Textarea, TextInput } from 'flowbite-react'
import React from 'react'
import ContactImg from '../assets/medias/contact.jpg'
import { useSelector , useDispatch } from 'react-redux'

import { sendMessage } from '../features/messages/message.slice.js'
import { getUser } from '../features/user/user.slice.js'
import { useState } from 'react'

export const ContactForm = () => {

  let [ inputs , setInputs] = useState({message: '' , email: '' , fullname: '' , phone: ''})
  let [message , setMessage] = useState({error: null , message: ''})
  let user = useSelector(getUser)
  const dispatch = useDispatch()

  const onInputChange = (e) => {
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
  }
  const onSubmit = async (e) => {
       e.preventDefault && e.preventDefault();
       try{
            let res = await dispatch(sendMessage(inputs))
            setMessage({error: false , message: "Message envoyé avec succès"})
            setInputs({message: '' , email: '' , fullname: '' , phone: ''})
       }catch(e){
           console.log('err:', e.message)
           setMessage({error: true , message: `Message non envoyé [${e.message}]. Veuillez réessayer`})
       }
  }
  return (
    <div>
      <div className="block md:flex md:justify-end md:mx-5 shadow-lg">
          <div  className='md:w-1/2'>
               <img src={ContactImg} alt="contactimg" className='md:w-[90%] h-full '/>
          </div>
           <form className='md:w-1/2 py-5 px-5' onSubmit={onSubmit}>
              <div >
                    <h1 className="text-4xl font-semi-bold mb-7 text-blue-600">Nous contacter</h1>
                    <div className='my-5 block'>
                        <Label htmlFor='fullname' value="Nom complet" />
                        <TextInput onChange={onInputChange} id="fullname" name="fullname" value={inputs.fullname} placeholder='Nom complet' />
                    </div>
                    <div className='my-5 block'>
                        <Label htmlFor='email' value="Votre email" />
                        <TextInput onChange={onInputChange}  id="email" name="email"  value={inputs.email} placeholder='email' />
                    </div>
                    <div className='my-5 block'>
                        <Label htmlFor='phone' value="Téléphone" />
                        <TextInput onChange={onInputChange}  id="phone" name="phone"  value={inputs.phone} placeholder='Téléphone' />
                    </div>
                    <div className='my-5 block'>
                        <Label htmlFor='message' value="Votre message" />
                        <Textarea  onChange={onInputChange} required id="message" name="message"  value={inputs.message} placeholder='message' rows={4}/>
                    </div>
                    {
                      message.message && (
                          <div className={'my-5 '+(message.error ? 'text-red-600' : 'text-green-600')}>
                             <span>{message.message}</span>
                          </div>
                      )
                    }
                    
                    <div className='mt-5'>
                      <Button type="submit">Envoyer</Button>
                    </div>
              </div>
           </form>
      </div>
         
    </div>
  )
}
