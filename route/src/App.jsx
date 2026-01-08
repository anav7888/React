import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductId from './pages/ProductId'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/productid' element={<ProductId />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App