// Chart.jsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import React, { useState, useEffect} from 'react'
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {       //showing 
  labels: ['1', '2', '3', '4', '5'], //
  datasets: [
    {
      label: 'Price',
      data: [30, 70, 45, 80, 100],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const Chart = () => {

  const [advertisement, setAdvertisements] = useState([]);
  const [users, setUsers] = useState([]);


  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/members/get_users/', {
        withCredentials: true,  
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //function to fetch advertisemnts
  const fetchAdvertisements = async () => {
    try{
      const responce = await axios.get('http://127.0.0.1:8000/Proprty_Listing/save_advertisement/',{
      }, {
        withCredentials: true,  
      });
      setAdvertisements(responce.data);
    }catch(error){
      console.error("Error fetching advertisements:",error);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  return(
    <div style={{ width: '400px', height: '300px' }}>
      <Line data={data} />
    </div>
  );
};

export default Chart;
