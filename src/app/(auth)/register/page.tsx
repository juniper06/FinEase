import RegisterForm from '@/src/components/form/RegisterForm'
import React from 'react'

export default function page() {
  return (
    <div className='w-full h-full p-8'>
        <div className='text-white text-[48px]'>FinEase</div>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h2 className='text-[#00FFFF] text-[64px] font-medium mb-[100px]'>Create Account</h2>
            <RegisterForm/>
        </div>
    </div>
  )
}
