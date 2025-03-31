import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AdminAds from './Components/Admin Dashboard/AdminAds';
import AdsSearchPage from './Pages/Properties';
import AdPostingForm from './Components/AdPostingForm/AdPostingForm';
import AdminSettings from './Components/Admin Dashboard/AdminSettings';
import AdFullView from './Pages/AdFullView';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Admin_users from './Components/Admin Dashboard/Admin_users';
import UserProfile from './Components/userprofile/UserProfile/UserProfile';
// import AdDetails from './Components/DisplayAds/AdDetails';


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
        <Route path='/ad-full-view/:ad_id' element={<AdFullView />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-ads' element={<AdminAds />} />
        <Route path='/admin-settings' element={<AdminSettings />} />
        <Route path="/ad-posting-form" element={<AdPostingForm />} />
        <Route path="/admin-users" element={<Admin_users />} />
        <Route path='/user-profile/:id' element={<UserProfile />} />
      </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
