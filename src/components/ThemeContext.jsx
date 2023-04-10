import React from 'react'
import { useState, useEffect } from 'react'
import { createContext} from 'react'

const ThemeContext = createContext()
function ThemeProvider({children}) {
    const [checkLogin, setCheckLogin] = useState('');
  const value = {
        setCheckLogin,
        checkLogin
  }
  console.log(checkLogin);
  return (
    <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
  )
}
export {ThemeContext , ThemeProvider}