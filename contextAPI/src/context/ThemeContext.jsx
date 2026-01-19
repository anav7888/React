import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeDataContext =  createContext()


const ThemeContext = (props) => {
    const [Theme, setTheme] = useState('Light')
  return (
    <div>
        <ThemeDataContext.Provider value={ [Theme, setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>
    </div>

  )
}

export default ThemeContext