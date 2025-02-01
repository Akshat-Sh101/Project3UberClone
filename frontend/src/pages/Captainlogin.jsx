import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Captainlogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [CaptainData,setCaptainData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    setCaptainData({email: email,password: password})

    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className='text-lg mb-2 font-medium'>Whats your email</h3>
          <input 
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
           }}  
           className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' 
           type="email"  
           required 
           placeholder='email@example.com'
          />
          <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
          <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}  
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' 
            required
            placeholder='Password' 
            type="password"
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base ' type="email"  required placeholder='email@example.com'>Login</button>
        </form>
          <p className='text-center mt-2'>Join a fleet? <Link to='/captain-signup' className='text-blue-600 ' >Register as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login' className='flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base '>Sign in as User</Link>
      </div>
    </div>
  )
}

export default Captainlogin
