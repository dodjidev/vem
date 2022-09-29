import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Page404 = () => {
  const navigate = useNavigate()
  useEffect(()=> navigate('/'))
  return (
    <div>Page404</div>
  )
}
