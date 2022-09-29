import React from 'react'
import { AdminNav } from './Admin/AdminNav'
import { Outlet } from 'react-router-dom'

export const Admin = () => {
  return (
    <div>
      <AdminNav />
      <div className='pt-7 md:mx-[100px] '>
          <Outlet />
      </div>
    </div>
  )
}
