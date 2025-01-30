import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar1 from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const AdFullView = () => {
  const { ad_id } = useParams(); // Extract `ad_id` from the URL

  const [advertisements, setAdvertisements] = useState(null);
  const [selectedAd, setSelectedAd] = useState(null);
  const [error, setError] = useState(null);

  const fetchAdvertisements = async () => {
    console.log("ad_id:", ad_id); // Log the ad_id
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/Proprty_Listing/save_advertisement/`,
        {
          withCredentials: true,
        }
      );
      console.log("All advertisements:", response.data);
      setAdvertisements(response.data);

      const foundAd = response.data.find((ad) => ad.ad_id === Number(ad_id));
      if (foundAd) {
        console.log("Found Advertisement:", foundAd);
        setSelectedAd(foundAd);
      } else {
        console.log("Advertisement not found.");
        setError("Advertisement not found.");
      }
    } catch (error) {
      console.error(
        "Error fetching advertisements:",
        error.response || error.message
      );
      setError("Failed to fetch advertisements. Please try again later.");
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  return (
    <div>
      <Navbar1 />

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {selectedAd ? (
          <>
            {/* Image */}
            <img
              src={`http://127.0.0.1:8000/${selectedAd.image}`}
              alt={selectedAd.title}
              className="object-cover w-full h-72 rounded-lg mb-4"
            />

            {/* Advertisement Details in Table */}
            <div className="bg-gray-100 p-4 rounded-lg ">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedAd.title}
              </h1>
              <table className="w-full border border-gray-300 rounded-lg text-left">
                <tbody>
                  <tr>
                    <th className="p-2 bg-gray-200">Owner</th>
                    <td className="p-2 ">
                      {selectedAd.contactName}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="p-2 bg-gray-200 w-1/3">Description</th>
                    <td className="p-2">{selectedAd.description}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="p-2 bg-gray-200">Price</th>
                    <td className="p-2 text-green-600 font-semibold">
                      {selectedAd.price}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="p-2 bg-gray-200">Location</th>
                    <td className="p-2">{selectedAd.location}</td>
                  </tr>
                  <tr>
                    <th className="p-2 bg-gray-200">Contact No.</th>
                    <td className="p-2 text-gray-500">
                      {selectedAd.contactNumber}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          !error && (
            <p className="text-center text-gray-600">
              Loading advertisement...
            </p>
          )
        )}

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </div>

      <Footer />
    </div>
  );
};

export default AdFullView;
