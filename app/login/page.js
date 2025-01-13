"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import profile from '@/components/Profile'


const login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [login, setlogin] = useState(false)
  const router = useRouter()

  
  const handlelogin= async()=>{
   

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
     username ,password
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    const response = await fetch("https://kbc-game-tan-phi.vercel.app/api/data", requestOptions);
    const result = await response.json();

   
    if (result.success) {
      console.log("Logged in successfully");
       setlogin(true)
       localStorage.setItem("isLoggedIn", "true")
       
       alert("logged in sucessfully");
       router.push("/")
    } else {
      console.log("Login failed");
      setlogin(false)
      localStorage.setItem("ishidden", "true")
      alert("Invalid username or password");
    }

  }
  return (
    <div className=' font-bold h-auto flex  text-black  bg-[#41314b] w-96 rounded-lg mx-auto border border-black border-opacity-100 flex-col gap-2'>
    <h1 className='text-xl my-4 flex justify-center'>Create your account </h1>
    <h1 className='ml-10'>Username</h1>
    <input value={username} onChange={(e)=>{setusername(e.target.value)}} className='w-5/6 rounded-lg  ml-9 h-8' type="text" placeholder='Enter your username ' />
    <h1 className='ml-10'>Password</h1>
    <input value={password} onChange={(e)=>{setpassword(e.target.value)}} className='w-5/6 rounded-lg  ml-9 h-8' type="password" placeholder='Enter your Password' />
    <button onClick={()=>{handlelogin()}} className='h-10 rounded-full flex justify-center items-center my-4 bg-[#744242] w-[328px] ml-8 hover:bg-slate-700'>login</button>
    
   </div>
  )
}

export default login
