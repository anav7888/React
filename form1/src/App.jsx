import React, { useState } from 'react'

const App = () => {

  const [allUser, setallUser] = useState('')
  const [allemail, setemail] = useState('')
  const [allbio, setbio] = useState('')

  const [array, setarray] = useState([])

  const form = (e) => {
    e.preventDefault();

    const newarray = [...array]
    newarray.push({ allUser, allemail,allbio })
    console.log(newarray)
    setarray(newarray)

    setallUser('')
    setemail('')
  }

  return (
    <div className='w-screen h-screen bg-[#1e1e1e] p-5'>
      <form
        onSubmit={(e) => {
          form(e)
        }}
        className='text-white/100 font-semibold text-2xl flex flex-col gap-2'>

        <input
          type="text"
          placeholder='username'
          className='p-2 border-2 border-white/80 rounded-2xl w-fit'
          value={allUser}
          required
          onChange={(e) => {
            setallUser(e.target.value)
          }}
        />
        <input type="email"
          placeholder='Enter your email'
          className='p-2 border-2 border-white/80 rounded-2xl w-fit'
          value={allemail}
          required
          onChange={(e) => {
            setemail(e.target.value)
          }}
        />
        <input type="text"
        placeholder='Bio'
        className='p-2 border-2 border-white/80 rounded-2xl w-fit'
        required
        onChange={(e)=>{
          setbio(e.target.value)
        }}
        />
        <button
          className='w-fit py-2 px-7 border-2 border-green-900 rounded-2xl font-semibold bg-green-700'>Submit</button>
      </form>

      {array.map((elem, idx) => {
        return <div key={idx}>
          <div className='name bg-white/100 font-semibold text-[#101010] gap-2 text-3xl flex w-fit px-6 py-2 rounded-2xl mt-4'>
            <h1 className=''>Name :</h1>
            <h1 className=''>{elem.allUser}</h1>
          </div>
          <div className='name bg-white/100 font-semibold text-[#101010] gap-2 text-3xl flex w-fit px-6 py-2 rounded-2xl mt-4'>
            <h1 className=''>Email :</h1>
            <h1 className=''>{elem.allemail}</h1>
          </div>
          <div className='name bg-white/100 font-semibold text-[#101010] gap-2 text-3xl flex w-fit px-6 py-2 rounded-2xl mt-4'>
            <h1 className=''>Bio :</h1>
            <h1 className=''>{elem.allbio}</h1>
          </div>
        </div>
      })}

    </div>
  )
}

export default App