import { useState } from 'react'
import NavBar from './components/navbar'
import { Home } from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Home />
    </>
  )
}

export default App
