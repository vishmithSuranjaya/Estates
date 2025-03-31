import React, { useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import ConfirmationModelBox from '../ConfirmationModel/ConfirmationModelBox';


const Admin_users = () => {

  const [users, setUsers] = useState([]);
  const [modelMsg, setModelMsg] = useState("");
  const [modelShow, setModelShow] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedUserStatus, setSelectedUserStatus] = useState(false);

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

  const getActionForUser= async(email,action)=>{
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/members/getAction/',
        {
          email:email,
          action:action,
        },
        {
          headers: {
           
            // Do not set 'Content-Type' for FormData, let axios handle it
          },
          withCredentials: true, // Include cookies with the request
        }
      );
      navigate('/');
    } catch (error) {
      console.error("Error:", error);
    }finally{
      fetchUsers();
    }

  }

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
                    {user.status&&<Button className="" onClick={() => {
                      setModelMsg(`Do you want to ${user.status ? "Enable" : "Disable"} the user?`),
                      setSelectedEmail(user.email),
                      setSelectedUserStatus(user.status),
                      setModelShow(true)
                    }}>
                      {user.status? "Enable":"Diable"}
                    </Button>}
                    {!user.status&&<Button className="btn btn-danger" onClick={() => {
                      setModelMsg(`Do you want to ${user.status ? "Enable" : "Disable"} the user?`),
                      setSelectedEmail(user.email),
                      setSelectedUserStatus(user.status),
                      setModelShow(true)
                    }}>
                      {user.status? "Enable":"Diable"}
                    </Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
    <ConfirmationModelBox 
      message={modelMsg}
      show={modelShow}
      handleClose={()=>setModelShow(false)}
      onClickFun={()=>{getActionForUser(selectedEmail,!selectedUserStatus)}}      
    />
    </div>
  )
}

export default Admin_users
