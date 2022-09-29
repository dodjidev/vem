import React from 'react'
import { Link } from 'react-router-dom'
import { BuildOutline , BusinessOutline , SchoolOutline, BagRemoveOutline} from 'react-ionicons'
export const AdminNav = () => {
  return (
    <div className='sm:flex  p-3  -mt-6 border-t'>
        
        <Link to="/admin/services" className='admin-nav-item'>
                <BuildOutline color="blue"/> <span className='ml-3'>Les services</span>
        </Link>
        <Link to="/admin/schools" className='admin-nav-item'>
                <BusinessOutline color="blue"/> <span className='ml-3'>Ecoles partenaires</span>
        </Link>
        <Link to="/admin/formations" className='admin-nav-item'>
                <BagRemoveOutline color="blue"/> <span className='ml-3'>Les formations</span>
        </Link>
        <Link to="/admin/degrees" className='admin-nav-item'>
                <SchoolOutline color="blue"/> <span className='ml-3'>Les diplomes</span>
        </Link>
        
    </div>
  )
}
