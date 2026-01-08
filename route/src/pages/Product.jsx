import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div >
            <h1
                className='m-5 px-6 py-2 rounded-md bg-amber-300 text-2xl text-black/90 font-semibold w-fit hover:text-amber-300 hover:bg-black/90'>
                Product
            </h1>
            <div
             className='flex justify-center items-center'>
                <Link
                 className='py-3 px-9 rounded-2xl bg-amber-300 text-black/90 text-6xl font-medium hover:text-amber-300 hover:bg-black/90 transition delay-150 duration-500 ease-in-out'
                  to='/Product/ProductId'>
                    ProductId
                    </Link>
            </div>
        </div>
    )
}

export default Product