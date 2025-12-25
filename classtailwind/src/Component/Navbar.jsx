import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between text-white">
      <div className="text-lg tracking-widest font-medium">
        DV$Y
      </div>
      <ul className="flex items-center gap-3 text-xs tracking-wider">
        {["DESIGNERS", "COLLABS", "EVENTS", "BLOG", "CARD"].map(
          (item) => (
            <li
              key={item}
              className="px-4 py-2 rounded-sm bg-white/10 backdrop-blur 
              hover:bg-orange-500 transition cursor-pointer"
            >
              {item}
            </li>
          )
        )}
        <li className="ml-2 px-4 py-2 rounded-sm bg-white/10 backdrop-blur
                       hover:bg-orange-600 transition cursor-pointer">
          GET IN TOUCH
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
