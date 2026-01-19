import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Product = () => {

const [Theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className='w-screen h-auto flex items-center justify-center bg-white absolute top-50'>
    <h1 className='text-9xl text-black font-semibold'>Product - ({Theme})</h1>
   </div>
  )
}

export default Product