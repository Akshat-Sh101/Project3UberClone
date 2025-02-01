import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const CaptainSignup = () => {
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const [captainData,setCaptainData] = useState({})
  const submitHandler =(e)=>{
    e.preventDefault()

    setCaptainData({
      fullName:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })

    setFirstname('')
    setLastname('')
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

          <h3 className='text-lg mb-2 font-medium'>Whats your name</h3>
          <div className='flex gap-4'>
            <input 
            className='bg-[#eeeeee] mb-2 rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base ' 
            type="text"  
            required 
            placeholder='First name'
            value={firstname}
            onChange={()=>{
              setFirstname(e.target.vlaue)
            }}
            />
            <input 
            className='bg-[#eeeeee] mb-2 rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base ' 
            type="text"  
            required 
            placeholder='Last name'
            value={lastname}
            onChange={()=>{
              setLastname(e.target.vlaue)
            }}
            />
          </div>

          <h3 className='text-lg mb-2 font-medium'>Whats your email</h3>
          <input 
           className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' 
           type="email"  
           required 
           placeholder='email@example.com'
           value={email}
            onChange={()=>{
              setEmail(e.target.vlaue)
            }}
          />
          <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
          <input 
            
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' 
            required
            placeholder='Password' 
            type="password"
            value={password}
            onChange={()=>{
              setPassword(e.target.vlaue)
            }}
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base ' type="email"  required placeholder='email@example.com'>Login</button>
        </form>
          <p className='text-center mt-2'>Already have a Account? <Link to='/captain-login' className='text-blue-600 ' >Login Here</Link></p>
      </div>
      <div>
        <p className='text-xs text-gray-500'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affilates to the number provided.</p>
      </div>
    </div>
  )
}

export default CaptainSignup
