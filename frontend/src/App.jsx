import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AdminRoutes from './Components/Admin Dashboard/AdminRoutes';
import Properties from './Pages/Properties';
import AdsSearchPage from './Pages/Properties';
import AdPostingForm from './Components/AdPostingForm/AdPostingForm';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search_filter" element={<AdsSearchPage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/post" element={<AdPostingForm />} />
      </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
