import { Button, TextInput } from 'flowbite-react'
import React, { useState  } from 'react'

import bgImage from '../assets/medias/services/accueil.jpg'
import logo from '../assets/icons/vem-logo.jpeg'


import { Link , useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from '../features/user/user.slice'

export const LoginPage = () => {
  let [inputs , setInputs] = useState({ email: "" , password: ""})
  const onImputChanged = (e)=>{
        setInputs(inputs=>({...inputs, [e.target.name]: e.target.value}))
  }

  const dispatch = useDispatch()
  
  const navigate = useNavigate()

  const onSubmit = (e)=> {
    e.preventDefault&&e.preventDefault();
    console.log('inputs:', inputs)
    
    dispatch(login(inputs)).then( res => {

        if(res.payload.error) alert('Email ou mot de passe incorrect')
        else navigate('/')
    })
    
  }

  return (
    <div>
        <div className='w-screen min-h-screen md:flex grid-flow-col-dense grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='md:w-[40%] bg-gray-500'>
                  <img src={bgImage} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className='md:w-[60%] md:px-10 md:flex md:items-center md:justify-center'>
                    <div className='mx-7 md:w-[80%] lg:w-[50%] py-10'>
                            <div className='text-right flex justify-end w-full  md:mb-[60px]'>
                                <img src={logo} alt="logo" className="w-[80px] h-[80px] mr-10"/>
                            </div>
                            <h1 className='md:mb-[60px] text-3xl font-bold'>Authentification</h1>
                           
                            <form onSubmit={onSubmit}>
                                <div className='my-5 w-full'>
                                    <span className='font-semi-bold'>Email</span>
                                    <TextInput onChange={onImputChanged} name="email" className="w-full" label="email" type="email"/>
                                </div>
                                <div className='my-5 w-full'>
                                    <span>Mot de passe</span>
                                    <TextInput  onChange={onImputChanged}  name="password" className="w-full" label="mot de passe" type="password"/>
                                </div>
                            
                                <div className='flex items-center justify-between flex-wrap'>
                                    <Button type="submit" value="Se connecter">Se connecter</Button>
                                    <Link to="/signin" className="text-sky-500">pas de compte ?</Link>
                                </div>
                            </form>
                    </div>
              </div>
        </div>
    </div>
  )
}
