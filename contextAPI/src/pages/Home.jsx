import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Home = () => {
  const [Theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className='w-screen h-auto flex items-center justify-center bg-white absolute top-50'>
     <h1 className='text-9xl text-black font-semibold'>Home - ({Theme})</h1>
    </div>
  )
}

export default Home
