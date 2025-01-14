import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Stats = () => {

  const [advertisement, setAdvertisements] = useState([]);

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

  const totalAds = advertisement.length;
  const statsData = [
    { label: 'Total Users', value: '1,245' },
    { label: 'Ads', value: totalAds },
    { label: 'Revenue', value: 'Rs.' },
    { label: 'New Customers', value: '0' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {statsData.map((stat, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-4">
          <h3 className="text-gray-700 font-semibold text-lg">{stat.label}</h3>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
