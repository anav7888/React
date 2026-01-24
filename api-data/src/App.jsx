import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';


const App = () => {


  return (
  
    <div className='overflow-hidden'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Product' element={<Product />} />
      <Route path='/Product/:id' element={<ProductDetail />} />
    </Routes>
    <Footer />
  </div>
  )
}

export default App
