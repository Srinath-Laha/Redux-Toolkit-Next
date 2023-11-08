"use client"
import { useAppSelector } from '@/redux/store'

import Login from './Login'

export default function Home() {

    const data =useAppSelector((data)=>data.authReducer.value.username)
    console.log(data,'---------')
 
  return (
    <main>
     <Login/>
     <h1>name : {data}</h1>
    </main>
  )
}
