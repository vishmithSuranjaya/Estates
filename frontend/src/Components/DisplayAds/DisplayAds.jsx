import axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const DisplayAds = () => {
  
    const navigate = useNavigate();

    //function to fetch advertisements
    const [advertisements, setAdvertisements] = useState([]);
    const fetchAdvertisemets = async () =>{
        try{
            const response = await axios.get('http://127.0.0.1:8000/Proprty_Listing/viewAdvertisement/',{
                withCredentials: true,
            });
            setAdvertisements(response.data);
        }catch(error){
            console.log('Error fetching advertisements:',error);
        }
    };

    useEffect(() => {
        fetchAdvertisemets();
    }, []);
    
  return (
    <div className="flex flex-wrap my-4 justify-center items-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {advertisements.map((ad) => (
      <div
        key={ad.ad_id}
        className="bg-gray-100 h-[300px] text-black rounded-xl pl-[10px] cursor-pointer flex flex-col justify-between"
        onClick={() => navigate(`/ad-full-view/${ad.ad_id}`)}
      >
        <div className="w-full h-[150px] mt-2 flex justify-center">
          <img
            src={`http://127.0.0.1:8000/${ad.image}`}
            alt="image 01"
            className="object-cover  w-80 pr-3 max-h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl font-semibold my-0">
            <span className="text-purple">Category - </span>
            {ad.propertyType}
          </p>
          <p className="my-0">{ad.title}</p>
          <p className="my-0 text-gray-500">
            Bedrooms: {ad.bedrooms} Bathrooms: {ad.bathrooms}
          </p>
          <p className="my-0">{ad.location}</p>
          <p className="m-0">Rs.{ad.price}/=</p>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default DisplayAds
