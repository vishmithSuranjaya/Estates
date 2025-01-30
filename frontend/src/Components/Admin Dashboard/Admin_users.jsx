import React, { useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios'
import { Button } from 'react-bootstrap';


const Admin_users = () => {

  const [users, setUsers] = useState([]);

  // Function to fetch advertisements
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/members/get_users/', {
        withCredentials: true,  
      });
      console.log('Users:', response.data);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const getCSRFToken = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === 'csrftoken') {
        return value;
      }
    }
    return null; // Return null if the token is not found
  };
  return (
    <div>
      <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-50 h-screen">
        <Header />

        <div className="p-4 flex-1 overflow-y-auto">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user,index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                 
                  <td>
                    <Button className="" onClick={() => DeleteAd(ad.ad_id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Admin_users
