import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [url, seturl] = useState('')
  const [name, setname] = useState('')
  const [bio, setbio] = useState('')
  const [des, setdes] = useState('')

const localData =  JSON.parse(localStorage.getItem('all-user')) || []
console.log(localData)


  const [allUser, setallUser] = useState(localData)

  const formSubmit = (e) => {
    e.preventDefault()
    console.log({ url, name, bio, des })

    const newUser = [...allUser]
    newUser.push({url,name,bio,des})
    setallUser(newUser)
    console.log(newUser)
    localStorage.setItem('all-user',JSON.stringify(newUser))

    seturl('')
    setname('')
    setbio('')
    setdes('')
  }

  const remove = (idx)=>{
    const cardremove = [...allUser]
    cardremove.splice(idx,1)
    setallUser(cardremove)
    localStorage.setItem('all-user',JSON.stringify(cardremove))
  }


  return (
    <div className='bg-[#1d1d1d] w-screen h-screen'>
      <div className='card w-screen h-[60vh] bg-amber-100 inset-shadow-sm p-2.5 flex flex-wrap gap-6'>
       {allUser.map((user,idx)=>{
          return <Card key={idx} user={user} remove = {remove} idx ={idx}/>
       })}

      </div>
      <div className='w-screen flex items-center justify-center'>

        <form action=""
          onSubmit={(e) => {
            formSubmit(e)
          }}
          className='text-[#f1f1f1] p-2.5 flex flex-col gap-2'>

          <div className='flex w-fit '>
            <h1 className='text-2xl font-semibold tracking-wide mr-2.5 ml-5'>Enter Your Profile Image : </h1>

            <input type="text"
              placeholder='ProfileImageURL'
              required
              value={url}
              onChange={(e) => {
                seturl(e.target.value)
              }}
              className='border-2 border-amber-50 py-1 px-2.5 rounded-lg w-[400px] h-[40px] text-white/90' />

          </div>
          <div className='flex w-fit '>
            <h1 className='text-2xl font-semibold tracking-wide mr-2.5 ml-5'>Enter Your Name : </h1>

            <input type="text"
              placeholder='Username'
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value)
              }}
              className='border-2 border-amber-50 py-1 px-2.5 rounded-lg w-[400px] h-[40px] text-white/90' />

          </div>
          <div className='flex w-fit '>
            <h1 className='text-2xl font-semibold tracking-wide mr-2.5 ml-5'>Enter Your Profession : </h1>

            <input type="text"
              placeholder='profession'
              required
              value={bio}
              onChange={(e) => {
                setbio(e.target.value)
              }}
              className='border-2 border-amber-50 py-1 px-2.5 rounded-lg w-[400px] h-[40px] text-white/90' />

          </div>
          <div className='flex w-fit '>
            <h1 className='text-2xl font-semibold tracking-wide mr-2.5 ml-5'>Enter Your Description : </h1>

            <input type="text"
              placeholder='Description'
              required
              value={des}
              onChange={(e) => {
                setdes(e.target.value)
              }}
              className='border-2 border-amber-50 py-1 px-2.5 rounded-lg w-[400px] h-[40px] text-white/90' />

          </div>

          <button
            className='w-fit py-2 px-20 bg-[#f1f1f1] text-[#1d1d1d] font-semibold rounded-lg text-2xl tracking-tight ml-[260px] mt-2 active:scale-95'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default App
