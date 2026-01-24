import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ProductDataContext } from '../context/ProductContext'


const ProductDetail = () => {

    const productData = useContext(ProductDataContext);
    
   const {id} =  useParams(productData)
   console.log(id)

   let selectedProduct = '';
   if(productData.length > 0 ){
    selectedProduct = productData.find((elem)=>elem.id == id)
   }

    return (
      <div>
         <div className='flex justify-center items-center m-10 h-[60vh]'>
         <div className='flex flex-col items-center  text-center w-[40vw] h-[40vh]'>
        <img 
        className=' object-cover object-center w-fit h-[200px]'
         src={selectedProduct.image} alt="" />
        <h1 className='font-semibold w-fit'>{selectedProduct.title}</h1>
        <h1 className='font-semibold w-fit'>{selectedProduct.price}</h1>
        <h1 className='font-semibold w-fit text-[12px]'>{selectedProduct.description}</h1>
      </div>
       </div>
      </div>
    )
}

export default ProductDetail
