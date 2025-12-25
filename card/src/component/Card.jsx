import React from 'react'
import { users } from '../App'


const Card = () => {
 
  return (

    users.map((e)=>{
        return <div className="card w-[275px] h-[auto] bg-white/90 rounded-3xl p-2.5 shadow-md flex flex-col">
  <div className="w-full bg-center bg-cover h-[110px] rounded-3xl shadow-xl opacity-90"style={{ backgroundImage: `url(${e.coverImage})`}}>
</div>
        <div className=' relative z-10 w-full h-[auto] flex flex-col text-left px-2.5'>
        <img src={e.avatar} className=" bg-gray-200 object-cover rounded-full w-[80px] h-[80px] border-amber-50 outline-3 outline-white/100  mt-[-35px] ml-2.5 shadow-xl/20" />
        <h1 className='font-bold my-3 text-xl text-black/80'>{e.name}</h1>
        <p className='w-[80%] leading-[1.5] opacity-80 text-black/70 mb-2 '>{e.role}</p>
        <div className='w-full h-[]auto]   flex mb-3 '>
          <div className='w-[33%] h-[auto] p-2.5 border-[1px] border-black/20 text-center flex flex-col leading-[1]'>
            <h1 className='font-bold text-xl text-black/80'>{e.likes}</h1>
            <h3 className='text-[14px] font-bold text-black/50'>Likes</h3>
          </div>
          <div className='w-[33%] h-[auto] p-2.5 border-[1px] border-black/20 text-center flex flex-col leading-[1]'>
            <h1 className='font-bold text-xl text-black/80'>{e.posts}</h1>
            <h3 className='text-[14px] font-bold text-black/50'>Post</h3>
          </div>
          <div className='w-[33%] h-[auto] p-2.5 border-[1px] border-black/20 text-center flex flex-col leading-[1]'>
            <h1 className='font-bold text-xl text-black/80'>{e.shares}</h1>
            <h3 className='text-[14px] font-bold text-black/50'>Share</h3>
          </div>
        </div>
        </div>

    </div>
    })

    // <div className="card w-[275px] h-[auto] bg-white/90 rounded-3xl p-2.5 shadow-md flex flex-col">
    //     <div className='w-full bg-[url(https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover h-[110px] rounded-3xl shadow-xl opacity-90'>
    //     </div>
    //     <div className=' relative z-10 w-full h-[auto] flex flex-col text-left px-2.5'>
    //     <img src="https://plus.unsplash.com/premium_vector-1727955579176-073f1c85dcda?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" bg-gray-200 object-cover rounded-full w-[80px] h-[80px] border-amber-50 outline-3 outline-white/100  mt-[-35px] ml-2.5 shadow-xl/20" />
    //     <h1 className='font-bold my-3 text-xl text-black/80'>Noah Thomanson</h1>
    //     <p className='w-[80%] leading-[1.5] opacity-80 text-black/70 mb-2 '>UI designer crafting clean & usable interfaces.</p>
    //     <div className='w-full h-[]auto]   flex mb-3 '>
    //       <div className='w-[33%] h-[auto] p-2.5 border-[1px] border-black/20 text-center flex flex-col leading-[1]'>
    //         <h1 className='font-bold text-xl text-black/80'>72.9k</h1>
    //         <h3 className='text-[14px] font-bold text-black/50'>Likes</h3>
    //       </div>
    //       <div className='w-[33%] h-[auto] p-2.5 border-[1px] border-black/20 text-center flex flex-col leading-[1]'>
    //         <h1 className='font-bold text-xl text-black/80'>900</h1>
    //         <h3 className='text-[14px] font-bold text-black/50'>Post</h3>
    //       </div>
    //       <div className='w-[33%] h-[auto] p-2.5 border-[1px] border-black/20 text-center flex flex-col leading-[1]'>
    //         <h1 className='font-bold text-xl text-black/80'>40.1k</h1>
    //         <h3 className='text-[14px] font-bold text-black/50'>Share</h3>
    //       </div>
    //     </div>
    //     </div>

    // </div>
  )
}

export default Card   