import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import MyRouter from './components/MyRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyRouter/>
    </>
  )
}

export default App
