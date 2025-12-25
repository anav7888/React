import { useState } from 'react'
import Card from './component/Card'
export const users = [
  {
    name: "Noah Thomanson",
    role: "UI designer crafting clean & usable interfaces.",
    coverImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80",
    likes: "72.9k",
    posts: 900,
    shares: "40.1k",
  },
  {
    name: "Emily Carter",
    role: "Product designer focused on human-centered UX.",
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    likes: "58.4k",
    posts: 640,
    shares: "22.7k",
  },
  {
    name: "Liam Rodriguez",
    role: "Visual designer blending art & technology.",
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80",
    likes: "91.2k",
    posts: 1200,
    shares: "55.8k",
  },
];
function App() {
  
  return (
    <section className='gap-2.5 flex flex-wrap bg-gray-100 p- gap-5 w-screen py-2.5 '>
    <Card />
    </section>
  )
}

export default App
