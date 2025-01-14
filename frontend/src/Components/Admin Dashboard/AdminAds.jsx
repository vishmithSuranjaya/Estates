import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const AdminAds = () => {
  const [advertisements, setAdvertisements] = useState([]);

  // Function to fetch advertisements
  const fetchAdvertisements = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/Proprty_Listing/save_advertisement/', {
        withCredentials: true,  
      });
      console.log('Advertisements:', response.data);
      setAdvertisements(response.data);
    } catch (error) {
      console.error('Error fetching advertisements:', error);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
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

  const DeleteAd = (ad_id) => {
    const csrftoken = getCSRFToken();
    console.log('CSRF Token:', csrftoken);  // Check if token is being retrieved
    alert('Deleting ad with id: ' + ad_id);
    axios.delete(`http://127.0.0.1:8000/Proprty_Listing/delete_advertisement/${ad_id}/`, {
      headers: {
        'X-CSRFToken': csrftoken
      }
    })
    .then((response) => {
      alert('Ad deleted!');
      // Remove deleted ad from state to reflect changes immediately
      setAdvertisements((prevAds) => prevAds.filter((ad) => ad.ad_id !== ad_id));
    })
    .catch((error) => {
      alert('Error deleting ad');
      console.error('Delete Error:', error);
    });
};


  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-50 h-screen">
        <Header />

        <div className="p-4 flex-1 overflow-y-auto">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Advertisement</th>
                <th>Price</th>
                <th>Location</th>
                <th>Property Type</th>
                <th>Area</th>
                <th>Contact Name</th>
                <th>Contact No.</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {advertisements.map((ad) => (
                <tr key={ad.ad_id}>
                  <td>{ad.ad_id}</td>
                  <td>{ad.price}</td>
                  <td>{ad.location}</td>
                  <td>{ad.propertyType}</td>
                  <td>{ad.area}</td>
                  <td>{ad.contactName}</td>
                  <td>{ad.contactNumber}</td>
                  <td>
                    <Button className="danger" onClick={() => DeleteAd(ad.ad_id)}>
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
  );
};

export default AdminAds;
