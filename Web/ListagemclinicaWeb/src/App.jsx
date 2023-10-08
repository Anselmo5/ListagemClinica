import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='aling'>
          <h2>Nos chamamos Losmanos </h2>
          <Link to="agendar">Clik Aqui Para Prossegurmos</Link>
      </div>
    </>
  )
}

export default App
