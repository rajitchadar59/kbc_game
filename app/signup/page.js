"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const signup = () => {
  const [Name, setName] = useState("")
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [mobilenumber, setmobilenumber] = useState("")
  const [password, setpassword] = useState("")
  const router = useRouter()
  const handlesubmit =()=>{

   
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "Name":Name,
      "username": username,
      "email": email,
      "mobilenumber":mobilenumber,
      "password": password
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
     
      redirect: "follow"
    };
    
    fetch("https://kbc-game-tan-phi.vercel.app/api/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

      alert(" signup sucessfull"); 


    router.push("/")



  }
  return (
    <div className=' font-bold h-auto flex  text-black  bg-[#41314b] w-96 rounded-lg mx-auto border border-black border-opacity-100 flex-col gap-1'>
    <h1 className='text-xl my-4 flex justify-center'>Create your account </h1>
    <h1 className='ml-10'>Name</h1>
    <input  onChange={(e)=>{setName(e.target.value)}} value={Name} className='w-5/6 rounded-lg  ml-9 h-8' type="text" placeholder='Enter your Name' />
    <h1 className='ml-10'>Userame</h1>
    <input  onChange={(e)=>{setusername(e.target.value)}} value={username} className='w-5/6 rounded-lg  ml-9 h-8' type="text" placeholder='Enter your Username' />
    <h1 className='ml-10 '>Email</h1>
    <input  onChange={(e)=>{setemail(e.target.value)}} value={email} className='w-5/6 rounded-lg  ml-9 h-8' type="text" placeholder='Enter your Email' />
    <h1 className='ml-10 '>Mobile number</h1>
    <input onChange={(e)=>{setmobilenumber(e.target.value)}}  value={mobilenumber} className='w-5/6 rounded-lg  ml-9 h-8' type="text" placeholder='Enter your Mobile number'/>
    <h1 className='ml-10'>Password</h1>
    <input onChange={(e)=>{setpassword(e.target.value)}}  value={password} className='w-5/6 rounded-lg  ml-9 h-8' type="password" placeholder='Enter your Password' />
    <button onClick={()=>{handlesubmit()}} className='h-10 rounded-full flex justify-center items-center hover:bg-slate-700 my-4 bg-[#744242] w-[328px] ml-8'>Submit</button>
   </div>
  )
}

export default signup
