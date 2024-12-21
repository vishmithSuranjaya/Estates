import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar1 from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
