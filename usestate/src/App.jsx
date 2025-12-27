import React, {useState} from 'react'

const App = () => {

  const [marks, setmarks] = useState([33,45,63,12,43,28,29]);
  
function grace(){
   const Newmarks = marks.map((elem)=>{
    if(elem<33){
      return elem+5
    }else{
      return elem
    }
  })
  setmarks(Newmarks)
}
  return (
    <div className='flex flex-col'>
     {marks.map((e,id)=>{
      return <h1 className='ml-[20px] font-bold text-4xl' key={id}> {id + 1}. Student Marks = {e} ({e>33?"Pass":"Fail"})</h1>
     })}
     <button className='py-2.5 px-5 bg-green-700 w-fit ml-[120px] rounded-lg mt-2 active:scale-[0.9] text-bold text-white/100' onClick={grace}>
      Give Them Grace</button>
    </div>
  )
}

export default App 