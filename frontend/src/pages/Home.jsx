import React from 'react'
import  {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center  bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-screen'>
            <img className='w-16 ml-9' src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" alt="" />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>   
            </div>
      </div>
    </div>
  )
}

export default Home
