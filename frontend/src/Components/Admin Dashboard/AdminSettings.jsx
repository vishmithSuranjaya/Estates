import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const AdminSettings = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPwd: "",
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData, [name]: value});
  }
  return (
    <div className="flex h-screen">
      <Sidebar />

      
      <div className="flex-1 flex flex-col bg-gray-50 h-screen">
        <Header />

      
        <div className="p-4 flex-1 overflow-y-auto">
         
              <form>
                <label>Username</label>
                <input 
                 type="text" 
                 name="admin-sername"
                 placeholder='Enter New Username' 
                 value="b"
                 onChange={handleChange}
                 required
                 />

      
              </form>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          </div>

          <div className="mt-4">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings
