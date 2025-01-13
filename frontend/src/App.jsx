import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AdsSearchPage from './Pages/Properties';
import AdPostingForm from './Components/AdPostingForm/AdPostingForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/search_filter" element={<AdsSearchPage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/ad-posting-form" element={<AdPostingForm />} />
      </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
