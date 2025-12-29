import React from 'react'

const Card = ({user,idx,deleteCard}) => {
   
    return (
        <div  key={idx} className='w-[18vw] h-fit bg-[#1d1d1d]  rounded-2xl items-center flex flex-col px-2.5 py-4 text-center text-[#f1f1f1]'>
            <img src={user.url} alt="" className='w-[100px] h-[100px] object-center object-cover rounded-full ' />
            <h1 className='text-2xl font-semibold tracking-wide  mt-2.5'>{user.name}</h1>
            <h4 className='text-[16px] font-semibold tracking-normal text-white/60 '>{user.bio}</h4>
            <h2 className='text-[14px] font-semibold tracking-normal text-white/80  my-2.5'>{user.des}</h2>
            <button 
            onClick={()=>{
                deleteCard(idx)
            }}
           
            className='px-8 py-1.5 bg-[#a00000] text-[#f1f1f1] rounded-2xl font-semibold tracking-wide text-[20px] active:scale-95'>Remove</button>
        </div>
    )
}

export default Card
