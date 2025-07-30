"use client";
import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { supabase } from '@/services/superbaseClient';

function Login() {

  /** Sign in with Google  */
  const signInWithGoogle = async () => {
    const {error}=await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if(error){
      console.error('Error signing in with Google:', error.message);
    }
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center gap-0 border border-gray-300 p-8 rounded-lg shadow-lg bg-white'>
        <Image 
          src="/logo_light.png" 
          alt="Main Logo" 
          width={400} 
          height={100} 
          className='w-[180px] mb-0' 
        />
        <Image 
          src="/login_light.png" 
          alt="LogIn" 
          width={600} 
          height={400} 
          className='w-[400px] h-[200px] mt-0' 
        />
        <h2 className='text-2xl font-bold text-center mt-5'>Welcome to IntelliHire</h2>
        <p>Google Authentication</p>
        <Button className="mt-7 w-full" onClick={signInWithGoogle}>Login with Google</Button>
      </div>
    </div>
  )
}

export default Login
