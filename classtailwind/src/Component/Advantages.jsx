import React from 'react'

const Advantages = () => {
  return (
    
    <section className="bg-black py-14">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-white text-5xl tracking-widest mb-5">
      OUR ADVANTAGES
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 
    md:h-[auto]">

      <div className="grid grid-rows-4 gap-6 h-full">
        <div className="row-span-2 rounded-2xl overflow-hidden">
          <img src="/images/3.jpg" className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8  text-white/70 relative">
          <h3 className="text-white mb-3">HIGH QUALITY</h3>
          <p className="text-sm leading-relaxed">
            Embrace superior craftsmanship with meticulously curated,
            enduring garments.
          </p>
          <span className="absolute right-6 bottom-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/10">
            ↗
          </span>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8  text-white/70 relative">
          <h3 className="text-white mb-3">ECO-FRIENDLY</h3>
          <p className="text-sm leading-relaxed">
            Sustainable fashion crafted with planet-friendly materials.
          </p>
          <span className="absolute right-6 bottom-6  w-9 h-9 rounded-full border border-white/20  flex items-center justify-center  bg-white/10">
            ↗
          </span>
        </div>
      </div>

      <div className="grid grid-rows-4 gap-6 h-full">

        <div className="bg-neutral-900 rounded-2xl p-8  text-white/70 relative">
          <h3 className="text-white mb-3">INDEPENDENT DESIGNERS</h3>
          <p className="text-sm leading-relaxed">
            Celebrating fashion-forward independent designers worldwide.
          </p>
          <span className="absolute right-6 bottom-6   w-9 h-9 rounded-full border border-white/20  flex items-center justify-center  bg-white/10">
            ↗
          </span>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 text-white/70 relative">
          <h3 className="text-white mb-3">EXCLUSIVE & UNIQUITY</h3>
          <p className="text-sm leading-relaxed">
            One-of-a-kind collections curated for exclusivity.
          </p>
          <span className="absolute right-6 bottom-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center  bg-white/10">
            ↗
          </span>
        </div>

        <div className="row-span-2 rounded-2xl overflow-hidden">
          <img src="/images/4.jpg"  className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  </div>
</section>


  )
}

export default Advantages
