import { Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import bgImage from '../assets/medias/services/accueil.jpg'
import logo from '../assets/icons/vem-logo.jpeg'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { signIn } from '../features/user/user.slice'
export const SignInPage = () => {
 
  let [inputs , setInputs] = useState({
                                            firstname: "" , 
                                            lastname: "" , 
                                            country: "" , 
                                            email: "" , 
                                            password: "" , 
                                            confirmedPassword: "",
                                            phone: ""
                                      })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onImputChanged = (e)=>{
      setInputs(inputs=>({...inputs, [e.target.name]: e.target.value}))
  }

  const checkPasswordMatch = (e)=>{
      return inputs.password == inputs.confirmedPassword
  }

  const onSubmit = (e)=>{
      e.preventDefault&& e.preventDefault()

      console.log('inputs:', inputs)

      if(checkPasswordMatch()){
        delete inputs.confirmedPassword
        dispatch(signIn(inputs)).then( res => {
            if(!res?.payload?.error) 
            navigate('/')
        })

      }

  }

  const requiredDom = (<span className=' text-red-500'>*</span>)
  return (
    <div>
        <div className='w-screen m-h-screen md:flex grid-flow-col-dense grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='md:w-[40%] bg-gray-500'>
                  <img src={bgImage} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className='md:w-[60%] md:px-10 md:flex md:items-center md:justify-center'>
                    <div className='mx-7 md:w-[80%] lg:w-[50%] py-10'>
                            <div className='text-right flex justify-end w-full  md:mb-[60px]'>
                                <img src={logo} alt="logo" className="w-[80px] h-[80px] mr-10"/>
                            </div>
                            <h1 className='md:mb-[60px] text-3xl font-bold'>Je crée mon compte</h1>
                            <form onSubmit={onSubmit}>
                                <div className="flex justify-between items-center">
                                    <div className='my-5 w-full'>
                                        <span className='font-semi-bold'>Nom {requiredDom}</span>
                                        <TextInput required className="w-full" placeholder="Nom" name="firstname" 
                                                   onChange={onImputChanged}/>
                                    </div>
                                    <div className='my-5 w-full ml-5'>
                                        <span className='font-semi-bold'>Prénom {requiredDom}</span>
                                        <TextInput required  className="w-full" placeholder="Prénom" 
                                                   name="lastname" onChange={onImputChanged}/>
                                    </div>
                                </div>
                                <div className='my-5 w-full'>
                                    <span className='font-semi-bold'>Pays</span>
                                    <TextInput className="w-full" placeholder="Pays" 
                                               name="country" onChange={onImputChanged}/>
                                </div>
                                <div className='my-5 w-full'>
                                    <span className='font-semi-bold'>Numéro de téléphone (avec indicatif) {requiredDom}</span>
                                    <TextInput required  className="w-full" placeholder="eg: +228 9856325" 
                                               name="phone" onChange={onImputChanged}/>
                                </div>
                                <div className='my-5 w-full'>
                                    <span className='font-semi-bold'>Email {requiredDom}</span>
                                    <TextInput required  className="w-full" placeholder="Email" type="email"
                                               name="email" onChange={onImputChanged}/>
                                </div>
                                <div className='my-5 w-full'>
                                    <span>Mot de passe {requiredDom}</span>
                                    <TextInput  required className="w-full" placeholder="Mot de passe" type="password" 
                                               name="password" onChange={onImputChanged}/>
                                </div>
                                <div className='my-5 w-full'>
                                    <span>Confirmez mot de passe {requiredDom}</span>
                                    <TextInput  required  className="w-full" placeholder="Confirmer"  type="password" 
                                                name="confirmedPassword" onChange={onImputChanged}/>
                                </div>
                                <div className='flex items-center justify-between flex-wrap'>
                                    <Button type='submit' value="Se connecter">Enregistrer</Button>
                                    <Link to='/login' className="text-sky-500">Vous avez un compte ?</Link>
                                </div>
                            </form>
                    </div>
              </div>
        </div>
    </div>
  )
}
