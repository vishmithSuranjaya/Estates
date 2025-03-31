import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { IoCall } from "react-icons/io5";

const CardSlider = () => {
  
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  const [advertisements, setAdvertisements] = useState([]);
  // Function to fetch advertisements
  const fetchAdvertisements = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/Proprty_Listing/viewAdvertisement/",
        {
          withCredentials: true,
        }
      );
      console.log("Advertisements:", response.data);
      setAdvertisements(response.data);
    } catch (error) {
      console.error("Error fetching advertisements:", error);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 bg-blue">
        {/* <Slider {...settings}>
          {data.map((d) => (
            <div
              className="bg-white h-[300px] text-black rounded-xl pl-[10px]"
              style={{ marginLeft: "10px" }}
            >
              <div className="rounded-xl">
                <img src="" alt="image 01" />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider> */}

<Slider {...settings}>
          {advertisements.slice(0, 5).map((ad) => (
            <div
            className="bg-white h-[300px] text-black rounded-xl cursor-pointer"
            style={{ marginLeft: "10px" }}
            onClick={() => navigate(`/ad-full-view/${ad.ad_id}`)} //add the ad_id to this link
          >
            <div className="flex justify-center items-center rounded-xl">
              <img
                src={`http://127.0.0.1:8000/${ad.image}`}
                alt="image 01"
                className="w-full h-[150px] mt-2 px-2"
              />
            </div>
          
            <div className="flex flex-col justify-center items-center ">
              <p className="text-xl font-semibold my-0">{ad.propertyType}</p>
              <p className="my-0 text-red-400">Rs.{ad.price}/=</p>
              <p className="my-0">{ad.location}</p>
              <p className="my-0">
                {<IoCall />} {ad.contactNumber}
              </p>
            </div>
          </div>
          
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
