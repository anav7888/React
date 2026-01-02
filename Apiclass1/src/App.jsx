import React, {useState} from 'react'
import axios from 'axios'
import Card from './component/Card'


const App = () => {

  const [allData, setallData] = useState([])

  const response = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setallData(data)

  }

  return (
    <div className='flex gap-2 flex-wrap'>
     <div className='w-[100%]'> <button
        onClick={response}
        className='py-2 px-8 w-fit bg-green-400 text-black/100 rounded-2xl font-medium text-3xl '>Get Data</button></div>

        {allData.map((user,idx)=>{
          return   <Card key={idx} user={user}/>
         
        })}

    </div>
  )
}

export default App