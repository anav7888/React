import React from 'react'
import Card from './components/cards.jsx'

const App = () => {

const users = [
  {
    fullname: "Aaravi Sharma",
    coverPhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    likesCount: 12450,
    postCount: 120,
    viewCount: 340000,
    follow: true,
    about: "Tech enthusiast who loves building clean and scalable UI designs."
  },
  {
    fullname: "Priya Verma",
    coverPhoto: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330.jpg",
    likesCount: 9800,
    postCount: 89,
    viewCount: 215000,
    follow: false,
    about: "Lifestyle blogger sharing travel stories and everyday moments."
  },
  {
    fullname: "Roshani Mehta",
    coverPhoto: "/img/photo-card.png",
    profilePhoto: "https://images.unsplash.com/photo-1766038803021-88d7cccfa5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
    likesCount: 15600,
    postCount: 140,
    viewCount: 410000,
    follow: true,
    about: "Creative designer passionate about photography and visual art."
  },
  {
    fullname: "Sneha Kapoor",
    coverPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    profilePhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9.jpg",
    likesCount: 7200,
    postCount: 65,
    viewCount: 178000,
    follow: false,
    about: "Fashion lover exploring trends with a minimalist touch."
  },
  {
    fullname: "Arjun Singh",
    coverPhoto: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e.jpg",
    profilePhoto: "https://images.unsplash.com/photo-1527980965255-d3b416303d12.jpg",
    likesCount: 20300,
    postCount: 190,
    viewCount: 620000,
    follow: true,
    about: "Fitness-focused creator documenting workouts and discipline."
  },
  {
    fullname: "Neha Patel",
    coverPhoto: "https://images.unsplash.com/photo-1501785888041-af3ef285b470.jpg",
    profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb.jpg",
    likesCount: 8900,
    postCount: 102,
    viewCount: 260000,
    follow: true,
    about: "Food explorer sharing easy recipes and café discoveries."
  },
  {
    fullname: "Vikram Rao",
    coverPhoto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e.jpg",
    profilePhoto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61.jpg",
    likesCount: 13400,
    postCount: 110,
    viewCount: 305000,
    follow: false,
    about: "Entrepreneur documenting startup life and productivity tips."
  },
  {
    fullname: "Ananya Iyer",
    coverPhoto: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3.jpg",
    profilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d.jpg",
    likesCount: 16700,
    postCount: 150,
    viewCount: 455000,
    follow: true,
    about: "Nature lover capturing peaceful landscapes and daily calm."
  },
  {
    fullname: "Kunal Malhotra",
    coverPhoto: "https://images.unsplash.com/photo-1519681393784-d120267933ba.jpg",
    profilePhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d.jpg",
    likesCount: 6400,
    postCount: 58,
    viewCount: 140000,
    follow: false,
    about: "Casual photographer learning storytelling through visuals."
  },
  {
    fullname: "Pooja Nair",
    coverPhoto: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e.jpg",
    profilePhoto: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c.jpg",
    likesCount: 11200,
    postCount: 98,
    viewCount: 290000,
    follow: true,
    about: "Digital creator sharing positivity, quotes, and life moments."
  }
];



  return (

     users.map((user, index) => (
        <Card key={index} user={user} />
      ))

  )
}

export default App