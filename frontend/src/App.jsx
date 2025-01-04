import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AdminRoutes from './Components/Admin Dashboard/AdminRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
