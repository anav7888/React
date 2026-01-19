import React from 'react'
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { ThemeDataContext } from '../context/ThemeContext';




const Navbar = () => {
  const [Theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className='w-screen h-auto bg-black flex px-4 py-5 text-white font-semibold  justify-between text-2xl'>
      <h1>ContextAPI</h1>
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
                    to='/Product'>
                    Product
                </NavLink>
                <button 
                onClick={()=>{
                  if(Theme =='Light'){
                    setTheme('Dark')
                  }else(setTheme('Light'))
                }}
                className='py-1 px-4  rounded-md  hover:bg-amber-500 active:scale-95'>
                  Change-Theme
                  </button>

      </div>
    </div>
  )
}

export default Navbar
