import React, { useState, useEffect } from "react";
import Navbar1 from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import axios from 'axios';
import {Button} from 'react-bootstrap'
import { IoCall } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function AdsSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setSearchLocation] = useState("");

  const [advertisements, setAdvertisements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [adsPerPage, setAdsPerPage] = useState(5); // Number of ads to display per page

  // Function to fetch advertisements
  const fetchAdvertisements = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/Proprty_Listing/viewAdvertisement/', {
        withCredentials: true,  
      });
      console.log(response.data);
      setAdvertisements(response.data);
    } catch (error) {
      console.error('Error fetching advertisements:', error);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  // Filter advertisements based on the search term, category, and location
  const filteredAds = advertisements.filter((ad) => {
    return (
      ad.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? ad.propertyType === category : true) &&
      ad.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  // Calculate the index of the first and last ad on the current page
  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;

  // Get the ads for the current page
  const currentAds = filteredAds.slice(indexOfFirstAd, indexOfLastAd);

  // Calculate total pages
  const totalPages = Math.ceil(filteredAds.length / adsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();
  return (
    <>
      {/* Navbar */}
      <Navbar1 />

      {/* Main Content */}
      <div style={{ display: "flex", gap: "20px", padding: "20px", marginTop: "80px" }}>
        {/* Search Options Section */}
        <div
          style={{
            position: "absolute",
            top: "100px", // Adjust to leave space for the navbar
            left: "20px",
            width: "20%",
            marginBottom: "1000px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#fff",
            zIndex: 1000,
          }}
        >
          <h2 className="text-blue-900">Search Options</h2>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="searchTerm" style={{ display: "block", marginBottom: "5px" }}>
              Keyword
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Enter keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="category" style={{ display: "block", marginBottom: "5px" }}>
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            >
              <option value="">All Categories</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Land">Land</option>
              <option value="Commercial Land">Commercial Land</option>
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="location" style={{ display: "block", marginBottom: "5px" }}>
              Location
            </label>
            <input 
            type="text" 
            value={location} 
            onChange={(e) => setSearchLocation(e.target.value)} 
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            placeholder = "Enter location.."
            />
          </div>
        </div>

        {/* Results Section */}
        <div
          style={{
            flex: "1",
            marginLeft: "22%",
            padding: "20px",
            marginTop: "0",
            paddingTop: "0",
            minHeight: filteredAds.length === 0 ? '500px' : 'auto', // Add more height when no results
          }}
        >
          {currentAds.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0,cursor:"pointer" }} >
              {currentAds.map((ad) => (
                <li
                className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md"
                  key={ad.ad_id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    padding: "15px",
                  }}
                >
                  <div className="w-1/2" onClick={() => navigate(`/ad-full-view/${ad.ad_id}`)}>
                  <img src={`http://127.0.0.1:8000/${ad.image}`}  alt="advertisement" />
                  </div>
                 <div className="w-2/3 mx-4">
                  <h3>{ad.title}</h3>
                  <p className="my-0 text-gray-900">{ad.description}</p>
                  <p className="my-0">Category: {ad.propertyType}</p>
                  <p className='my-0'>Location: {ad.location}</p>
                  <p className="my-0">Price: Rs.{ad.price}/=</p>
                  <p className="my-0 ">{<IoCall />}   {ad.contactNumber}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p>No results found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ marginRight: "10px", padding: "10px", cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              padding: "10px",
              margin: "0 5px",
              backgroundColor: currentPage === index + 1 ? "#007bff" : "#f1f1f1",
              color: currentPage === index + 1 ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ marginLeft: "10px", padding: "10px", cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
        >
          Next
        </Button>
      </div>
      <div style={{marginTop:"150px"}}>
      <Footer />
      </div>
    </>
  );
}

export default AdsSearchPage;
