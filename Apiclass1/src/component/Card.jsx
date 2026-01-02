import React from 'react'

const Card = ({user}) => {

    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)

  return (
    <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} 
    className="w-[320px]  text-white rounded-2xl p-5 shadow-lg mix-blend-difference font-semibold">
      
      <div className="text-center border-b border-white/10 pb-4">
        <div className="w-20 h-20 mx-auto rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold">
          L
        </div>

        <h1 className="text-xl font-semibold mt-3">{user.name}</h1>
        <p className="text-white/60">@{user.username}</p>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <p>📧 {user.email}</p>
        <p>🌐 {user.website}</p>
      </div>

      <div className="mt-5 bg-white/5 p-3 rounded-xl text-sm">
        <h2 className="font-semibold mb-1">Address</h2>
        <p className="text-white/70">
        {user.address.street}, {user.address.city}
        </p>
      </div>

    </div>
  );
};


export default Card