"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
     const router = useRouter();
    const handleBtn = () =>{
      const password = prompt("Enter your password")
      if(password==="1234"){
         router.push("/dashboard")
      }
    }


    return (
        <div className='text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 text-black p-10'>
            <h2 className="text-4xl font-bold">Welcome to Dev-Story</h2>
            <button 
            onClick={handleBtn}
            className="px-4 py-2 bg-sky-500 text-white cursor-pointer rounded hover:bg-black duration-300">Share-Story</button>
        </div>
    );
};

export default Banner;