import React from 'react'
import {Link} from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {AiOutlineUnlock} from "react-icons/ai"
import bgimgg from '../image/shopease.jpg'

const Register = () => {
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover ' style={{ background: `url(${bgimgg})` }}>
    <div>
    <div className='bg-slate-800 border-slate-400 roundeed-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
        <form action="">
        <div className='relative my-7'>
            <input type="text" className='block w-72 py-2.5 px-0 text-xl text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
            <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-14 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14'>Your Name</label>
            <BiUser className='absolute top-4 right-4' />
        </div>
        <div className='relative my-7'>
            <input type="email" className='block w-72 py-2.5 px-0 text-xl text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' />
            <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-14 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14'>Your Email</label>
            <BiUser className='absolute top-4 right-4' />
        </div>
        <div className='relative my-6'>
            <input type="password" className='block w-72 py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
            <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-11 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14'>Your Password</label>
            <AiOutlineUnlock className='absolute top-4 right-4' />
        </div>
       
        <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-gray-800 hover:bg-gray-600 hover:text-white py-2 transition-colors duration-300' type="submit">SignUp</button>
        <div>
            <span className='mt-4'>Already Have an Account <Link className='text-blue-500' to='/Login'>Login</Link> </span>
        </div>
        </form>
    </div>
</div>
</div>
  )
}

export default Register