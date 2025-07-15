import { useState } from 'react'
import NavBar from './components/navbar'
import { Home } from './pages/home'
import DarkTest from './components/DarkModeTest'
import './main.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <DarkTest />
    </>
  )
}

export default App