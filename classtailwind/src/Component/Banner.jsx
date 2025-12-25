import React from 'react'

const Banner = () => {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden 
bg-[url(/images/banner.png)] bg-cover bg-[position:70%_center]">

  <div className="relative z-10 h-full max-w-7xl mx-auto px-10 
  flex flex-col justify-between">

    {/* TOP CONTENT */}
    <div className="pt-70 min-w-[54rem] text-white">
      <h1 className="text-8xl tracking-[0.15em] font-light">
        DESIGN
      </h1>
      <h1 className="text-8xl tracking-[0.15em] font-light mt-2 ml-20">
        & FREEDOM
      </h1>
     
    </div>

    {/* BOTTOM CONTENT */}
    <div className="pb-16 flex items-center gap-4 text-xs tracking-widest 
    text-white/80 hover:text-white transition cursor-pointer justify-between">
       <p className="mt-6 text-sm text-white/70">
        Explore Independent Style by Embracing Uniqueness<br />
        with Our Exclusive Designer Apparel
      </p>
    <h1 className='flex items-center gap-3 '>  <span className="w-10 h-10 rounded-full border border-white/40 
      flex items-center justify-center bg-white/10">
        ↓
      </span>
      LEARN MORE</h1>
    </div>

  </div>
</section>

  )
}

export default Banner

