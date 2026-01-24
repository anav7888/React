import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='w-screen h-auto bg-black flex px-4 py-5 text-white font-semibold  justify-between text-2xl'>
      <h1>API-DATA</h1>
      <div className='text-white text-2xl flex'>
      <NavLink
                    className='py-1 px-4  rounded-md  hover:bg-amber-500'
                    to='/'>
                    Home
                </NavLink>
                <NavLink
                    className='py-1 px-4  rounded-md  hover:bg-amber-500'
                    to='/About'>
                    About
                </NavLink>
                <NavLink
                    className='py-1 px-4  rounded-md  hover:bg-amber-500'
                    to='/Product
                    '>
                    Product
                </NavLink>
      </div>
    </div>
  )
}

export default Navbar
