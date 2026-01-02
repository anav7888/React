import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [Card, setCard] = useState('')


  const getApi = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    setCard((response.data.results[0].name.title)+" "+(response.data.results[0].name.first)+" "+(response.data.results[0].name.last))
    console.log((response.data.results[0].name.title)+" "+(response.data.results[0].name.first)+" "+(response.data.results[0].name.last))
  }

  useEffect(function () {
    getApi()
  }, [])


  return (
    <>
      <div
        className="
          relative w-screen h-screen
          bg-[url('https://i.pinimg.com/736x/f0/d2/8d/f0d28df1476d8bf3a89371f504e4137c.jpg')]
          bg-cover bg-center">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full flex-col gap-2.5">
          <h1 className='text-2xl font-semibold '>{Card}</h1>
          <button 
          onClick={getApi}
          className='text-2xl bg-black text-amber-50 py-2 px-9 rounded-2xl font-semibold'>Click</button>
        </div>
      </div>
    </>
  )
}

export default App
