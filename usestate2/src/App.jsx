import React, {useState}from 'react'
import Washroom from './Washroom';

const App = () => {

  const [gender, setGender] = useState("Male");
  function changeGender(){
    if(gender == "Male"){
      setGender("Female")
    }else{
      setGender("Male")
    }
  }
  return (
    <div className='p-5 gap-2.5 flex flex-col'>
      <h1 className='text-2xl font-bold ml-15'>{gender}</h1>
      <button  className='py-2.5 px-5 bg-green-400 text-2xl font-bold rounded-2xl w-fit px-5 py-2.5 ' onClick={changeGender}>Change Gender</button>
      <Washroom user={gender} />
      </div>
  )
}

export default App
