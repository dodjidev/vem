import React from 'react'
import { Home } from '../pages/Home'
import Footer from './shared/Footer'
import Header from './shared/Header'

import { Outlet } from 'react-router-dom'

const AppContainer = () => {
  return (
    <div className='mt-[70px]'>
        <Header />
        <div className='mb-5 mt-[90px]'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default AppContainer
