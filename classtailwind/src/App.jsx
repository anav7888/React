import { useState } from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Card from './Component/Card'
import About from './Component/About'
import Advantages from './Component/Advantages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Banner />
    <Card />
    <About />
    <Advantages />
    </>
  )
}

export default App
