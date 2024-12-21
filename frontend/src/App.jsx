import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
