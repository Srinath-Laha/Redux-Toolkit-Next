"use client"
import { logIn, logOut } from '@/redux/features/auth-slice'
import { AppDispatch } from '@/redux/store'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

const Login = () => {

    const dispath =useDispatch<AppDispatch>()
    const [username, setUsername] = useState("")
    const handleLogin=()=>{
        dispath(logIn(username))
    }
    const handleLogout=()=>{
        dispath(logOut())

    }
    const handleToggle=()=>{

    }
  return (
    <div style={{justifyContent:"center"}}>
        <input type='text' placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)}/><br/>
        <button onClick={handleLogin}>Login</button><br/>
        <button onClick={handleLogout}>Log Out</button><br/>
        <button onClick={handleToggle}>Moderate status</button><br/>
    </div>
  )
}

export default Login