import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function ProtectRoutes() {
const [isUserAuth,setIsUserAuth]= useState(false)

const navigate = useNavigate()
useEffect(()=>{
    if(!isUserAuth){
        navigate('/login')
    }
})

  return (
    <Outlet />
  )
}

export default ProtectRoutes