"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link'
import Dropdown from './Dropdown';
const Navebar = () => { 
const router = useRouter();
const [ishidden, setishidden] = useState("")



const handlelogout = ()=>{

  localStorage.setItem("isLoggedIn", "false")
 
  router.push("/");

  
}


  return (
    <>
    <nav className=''>
        <div className="text-white bg-[#6c4164] flex w-5/6 mx-auto h-12 items-center rounded-full my-7 border border-black border-opacity-100 justify-between ">
        <Link href="/"><img src="kbc.jpg" className=" w-14 h-14  " alt="logo" /></Link>
        

            <ul className='flex justify-between  items-center sm:gap-4 md:gap-4 lg:gap-20 2xl:gap-32   2xl:ml-16 '>
                <Link href="/"><li className='font-bold hidden md:block lg:block 2xl:block'>Home</li></Link>
                <Link href="/about"><li className='font-bold hidden md:block'>About</li></Link>
                <Link href="/contactus"><li className='font-bold hidden md:block'>Contact us</li></Link>
                
            </ul>
          
          
        
            

         
            


             <div className='md:flex'>
             <button className=' bg-[#6f4e76] hidden md:block  border border-black border-opacity-50 mx-1 sm:mx-2  lg:mx-20 2xl:mx-36 p-2  md:mx-2 w-[104px] rounded-full font-bold '><Link href="/signup">sign up</Link></button>
             <button className=' bg-[#6f4e76] hidden md:block border border-black border-opacity-50  mx-1 sm:mx-1  lg:mx-2 2xl:mx-2 p-2  md:mx-5  w-[104px] rounded-full font-bold '><Link href="/login">login</Link></button>
             <button  onClick={()=>{handlelogout() }}  className='hidden md:block  bg-[#6f4e76] border border-black border-opacity-50  p-2   w-[104px]   rounded-full font-bold mr-3  '>logout</button>
            
             </div>
            <div className='mr-5 text-black'>
            <Dropdown/>
            </div>
        </div>

       

    </nav>
    
    </>
  )
}

export default Navebar

