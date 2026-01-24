import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductDataContext } from '../context/ProductContext';

const Product = () => {

    const productData = useContext(ProductDataContext);

  let renderdata = 'Loading....'
  if(productData.length > 0){
   renderdata =  productData.map((elem,idx)=>{
      return <Link  
      className='block w-[250px] h-{250px} p-4 bg-amber-100 ' key={idx} to={`/product/${elem.id}`}>
        <div className='flex flex-col items-center  text-center'>
          <img 
          className=' object-cover object-center w-fit h-[200px]'
           src={elem.image} alt="" />
          <h1 className='font-semibold w-fit'>{elem.title}</h1>
        </div>
      </Link>
    })
  }

    return (
        <div className=' w-screen flex flex-wrap gap-10 bg-black/90 p-10'>
    {renderdata}
   </div>
    )
}

export default Product
