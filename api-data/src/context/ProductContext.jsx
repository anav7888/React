import axios from 'axios';
import React, { createContext } from 'react'
import { useEffect , useState } from 'react';
import {getProductData } from '../api/Productapi';

export const ProductDataContext = createContext()


const Productcontext = (props) => {


const [productData, setProductData] = useState([]);

 const setdata = async()=>{
  setProductData(await getProductData())
 }
  

 useEffect(() => { 
  setdata()
 },[]);

  return (
    <div>
        <ProductDataContext.Provider value={productData}>
      {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default Productcontext
