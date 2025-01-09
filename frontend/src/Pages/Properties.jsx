import React, { useState } from "react";
import Navbar1 from "../Components/Navbar/Navbar";
import Adcard from "../Components/Adcard/Adcard";
import Footer from "../Components/Footer/Footer";

function AdsSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const ads = [
    { id: 1, title: "iPhone 14 for Sale", category: "Electronics", location: "New York" },
    { id: 2, title: "Sofa Set Clearance", category: "Furniture", location: "California" },
    { id: 3, title: "Gaming Laptop", category: "Electronics", location: "New York" },
    { id: 4, title: "Bicycle for Kids", category: "Toys", location: "Texas" },
  ];

  const filteredAds = ads.filter((ad) => {
    return (
      ad.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? ad.category === category : true) &&
      (location ? ad.location === location : true)
    );
  });

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
            marginBottom:"400px",
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
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Toys">Toys</option>
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="location" style={{ display: "block", marginBottom: "5px" }}>
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            >
              <option value="">All Locations</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
            </select>
          </div>
        </div>

        {/* Results Section */}
        <div
          style={{
            flex: "1",
            marginLeft: "22%",
            padding: "20px",
            marginTop:"0",
            paddingTop:"0",
            
          }}
        >
          
          {filteredAds.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {/* {filteredAds.map((ad) => (
                <li
                  key={ad.id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    padding: "15px",
                  }}
                >
                  <h3>{ad.title}</h3>
                  <p>Category: {ad.category}</p>
                  <p>Location: {ad.location}</p>
                </li>
              ))} */}
              <Adcard />
              
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdsSearchPage;
