import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar w-full h-[10vh] bg-black/80 items-center flex justify-between px-5'>
            <h1 className='text-white font-semibold text-2xl cursor-pointer'>Route</h1>
            <div className='flex gap-6 font-medium text-[18px] text-white/90 '>
                <NavLink
                    style={({ isActive }) =>
                   ({ color : isActive ? 'red' : 'white'
                })}
                    className='py-1 px-3  rounded-md  hover:bg-amber-500'
                    to='/'>
                    Home
                </NavLink>
                <NavLink
                 style={({ isActive }) =>
                 ({ color : isActive ? 'red' : 'white'
              })}
                    className='py-1 px-3  rounded-md hover:bg-amber-500'
                    to='/Product'>
                    Product
                </NavLink>
                <NavLink
                 style={({ isActive }) =>
                 ({ color : isActive ? 'red' : 'white'
              })}
                    className='py-1 px-3  rounded-md hover:bg-amber-500'
                    to='/About'>
                    About
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar