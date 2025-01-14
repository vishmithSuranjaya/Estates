import React, { useState } from "react";
import Navbar1 from "../Navbar/Navbar";
import axios from 'axios'
import {variables} from '../../Variables';
import { useNavigate } from "react-router-dom";

const AdPostingForm =  () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    propertyType: "House",
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    contactName: "",
    contactNumber: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();

    const data = new FormData();
    // Append all the form fields to FormData
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("propertyType", formData.propertyType);
    data.append("location", formData.location);
    data.append("area", formData.area);
    data.append("bedrooms", formData.bedrooms);
    data.append("bathrooms", formData.bathrooms);
    data.append("contactName", formData.contactName);
    data.append("contactNumber", formData.contactNumber);
    if (formData.image) {
      data.append("image", formData.image); // Append image if available
    }
    
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/Proprty_Listing/save_advertisement/',
        data,
        {
          headers: {
           
            // Do not set 'Content-Type' for FormData, let axios handle it
          },
          withCredentials: true, // Include cookies with the request
        }
      );
      alert(response.data.message);
      navigate('/');
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send data. Please try again.");
    }
};

    

  return (
    <div>
        <Navbar1 />
        <form
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Post an Advertisement</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Enter a catchy title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Provide details about the property"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block font-medium mb-2">
          Price (LKR)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Enter the price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="propertyType" className="block font-medium mb-2">
          Property Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          value={formData.propertyType}
          onChange={handleChange}
          required
        >
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Land">Land</option>
          <option value="Commercial">Commercial Property</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block font-medium mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="City, State"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label htmlFor="bedrooms" className="block font-medium mb-2">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="No. of Bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="bathrooms" className="block font-medium mb-2">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="No. of Bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="area" className="block font-medium mb-2">
          Area (sq. ft.)
        </label>
        <input
          type="number"
          id="area"
          name="area"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Enter area size"
          value={formData.area}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="contactName" className="block font-medium mb-2">
          Contact Name
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Enter your name"
          value={formData.contactName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="contactNumber" className="block font-medium mb-2">
          Contact Number
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="Enter your contact number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block font-medium mb-2">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          onChange={handleFileChange}
        />
      </div>

      <button
  type="submit"
  className="w-full bg-blue-900 text-white font-bold py-2 rounded-md hover:bg-blue-800">
  Submit
</button>

    </form>
    </div>
  );
};

export default AdPostingForm;
