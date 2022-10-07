import { Button } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'
import { MenuOutline , CloseOutline } from 'react-ionicons'
import Logo from '../../assets/icons/vem-logo.jpeg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIsAdmin } from '../../features/user/user.slice'
const Header = () => {
  let [navVisibleClass, setNavVisibleClass] = useState('hidden')
  const isAdmin = useSelector(getIsAdmin)
  const navigate = useNavigate()
  const changeNavState = ()=> setNavVisibleClass(navVisibleClass => (navVisibleClass == 'visible' ? 'hidden' : 'visible'))
  const onNav = (path)=>{
      setNavVisibleClass('hidden')
      navigate(path)
  }
  return (
    <div className='fixed w-full top-0 left-0 z-10'>
      <div className='md:flex bg-white  p-4 drop-shadow-lg items-center gaps-3 justify-between z-10'>
             <div className='text-lg font-medium text-black flex  items-center justify-between md:block '>
                 <h1 className='font-bold'>
                   <img  src={Logo} className="h-[40px] w-[40px]"/>
                  </h1>  
                 <div className='cursor-pointer' onClick={changeNavState}>
                   {navVisibleClass == 'visible' ? <CloseOutline cssClasses='md:hidden'/>: <MenuOutline cssClasses='md:hidden'/> } 
                 </div>
              </div>
             <div className={` md:flex  md:visible items-center justify-between w-[95%] ${navVisibleClass}`}>
                <div className='md:ml-3 '>
                    <span onClick={() => onNav("/#about-container")} href="/#about-container" className='menu-link' >A propos</span>
                    <span onClick={() => onNav("/services")}  className='menu-link' >Nos services</span>
                    <span  onClick={() => onNav("/schools")}  to="/schools" className='menu-link' >Ecoles partenaires</span>
                    <span  onClick={() => onNav("/formations")}  to="/formations" className='menu-link' >Les formations</span>
                    <span  onClick={() => onNav("/degrees")}  to="/degrees" className='menu-link' >Les diplomes</span>
                    { isAdmin && <span  onClick={() => onNav("/admin")}   to="/admin" className='menu-link' >Espace administration</span>}
                    {/* <a href="/#formations-container" className='menu-link' >Les formations</a>
                    <a href="/#diplomat-container" className='menu-link' >Les diplomes</a> */}
                </div>
                <div>
                      {/* <button className='ring ring-sky-700 px-2 rounded bg-sky-500'>Login</button> */}
                      {/* <Button>
                        <a href="/#contact-container">CONTACTEZ-NOUS</a>
                      </Button> */}
                      <Button onClick={()=>onNav('/login')}>Connexion</Button>
                </div>
             </div>
      </div>
    </div>
  )
}

export default Header
