import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

const navigate = useNavigate()

  return (

    <div>
      <div className='w-screen h-[68.5vh] flex items-center justify-center bg-white top-50 flex-col gap-4'>
     <h1 className='text-9xl text-black font-semibold'>Home</h1>
     <button
     onClick={()=>{
        navigate('/Product')
     }}
     className='py-3 px-9 rounded-2xl bg-amber-300 text-black/90 text-3xl font-medium hover:text-amber-300 hover:bg-black/90 transition delay-150 duration-500 ease-in-out'
      >
        Explore-Product
      </button>
    </div>
    </div>
  )
}

export default Home
