import React from 'react'

const About = () => {
  return (
    <section className="bg-black py-5">
    <div className="max-w-7xl mx-auto ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  md:h-[520px]">

        <div className="bg-neutral-900 rounded-2xl p-12   text-white flex flex-col justify-center">

          <span className="text-xs tracking-widest text-white/60 mb-6">
            ABOUT
          </span>

          <h2 className="text-4xl font-light tracking-wide mb-8">
            WHERE FASHION MEETS FREEDOM
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 
          text-sm text-white/60 leading-relaxed">

            <p>
              We believe that fashion should be an expression of individuality.
              We encourage creativity and originality in every item we offer,
              presenting customers with exclusive collections from independent
              designers. With a commitment to fostering a community of creativity
              and innovation.
            </p>

            <p>
              We strive to connect designers with fashion enthusiasts who
              appreciate the artistry and individuality behind each piece.
              Driven by our dedication to authenticity, we curate each
              collection with a keen eye for unique designs that inspire
              confidence and self-expression.
            </p>

          </div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img src="/images/2.jpg"  alt="About fashion"  className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  </section>
  )
}

export default About
