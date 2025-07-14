import { useState } from 'react'
import NavBar from './components/navbar'
import { Home } from './pages/home'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      < Home />
    </>
  )
}

export default App
