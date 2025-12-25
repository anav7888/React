import React from 'react'

const Card = () => {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "INDEPENDENCY",
              desc: "Explore the creativity of independent designers from around the globe.",
            },
            {
              title: "UNIQUITY",
              desc: "Discover the charm of unique pieces that stand out effortlessly work.",
            },
            {
              title: "QUALITY",
              desc: "Experience unparalleled craftsmanship and attention to detail.",
            },
            {
              title: "SUSTAINABILITY",
              desc: "Embrace eco-conscious fashion choices without compromising on style.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-neutral-900 rounded-2xl p-8 
              text-white/70 relative border border-white/5
              hover:border-white/10 transition"
            >
              <h3 className="text-white text-sm tracking-widest mb-3">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed mb-8">
                {item.desc}
              </p>

              <div className="flex items-center gap-3 text-xs tracking-widest cursor-pointer hover:text-white transition">
                <span className="w-8 h-8 rounded-full border border-white/20 
                flex items-center justify-center">
                  ↗
                </span>
                LEARN MORE
              </div>
            </div>
          ))}

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 
        text-center mt-10">

          {[
            { label: "DESIGNERS", value: "150+" },
            { label: "CLIENTS", value: "500+" },
            { label: "MASTERPIECES", value: "20K+" },
            { label: "EVENTS", value: "50+" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-white/40 text-xs tracking-widest mb-2">
                {stat.label}
              </p>
              <h3 className="text-white text-3xl font-light tracking-wide">
                {stat.value}
              </h3>
            </div>
          ))}

        </div>
      </div>
      </section>
  )
}

export default Card
