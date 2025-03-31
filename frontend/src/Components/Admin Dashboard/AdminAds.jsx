import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { Button } from "react-bootstrap";
import ConfirmationModelBox from "../ConfirmationModel/ConfirmationModelBox";

const AdminAds = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [modelMsg, setModelMsg] = useState("");
    const [modelShow, setModelShow] = useState(false);
    const [selectedAddID, setSelectedAddID] = useState("");
    const [selectedAddStatus, setSelectedAddStatus] = useState(false);

  // Function to fetch advertisements
  const fetchAdvertisements = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/Proprty_Listing/save_advertisement/",
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

  const getActionForAdvertisement = async (addId, action) => {
    console.log(addId)
    console.log(action)
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/Proprty_Listing/getAction/",
        {
          addId: addId,
          action: action,
        },
        {
          headers: {
            // Do not set 'Content-Type' for FormData, let axios handle it
          },
          withCredentials: true, // Include cookies with the request
        }
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send data. Please try again.");
    }finally{
      fetchAdvertisements();
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const getCSRFToken = () => {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === "csrftoken") {
        return value;
      }
    }
    return null; // Return null if the token is not found
  };

  const DeleteAd = (id) => {
    const csrftoken = getCSRFToken(); // Fetch the CSRF token
    if (!id) {
      alert("Ad ID is missing!");
      return;
    }

    alert("Deleting ad with id: " + id);

    axios
      .delete(
        `http://127.0.0.1:8000/Proprty_Listing/save_advertisement/${id}`,
        {
          headers: {
            "X-CSRFToken": csrftoken, // Include CSRF token
            "X-Requested-With": "XMLHttpRequest", // Ensure Django recognizes this as an AJAX request
          },
        }
      )
      .then((response) => {
        alert("Ad deleted successfully!");
        console.log("Delete Response:", response.data);

        // Update state to remove the deleted ad
        setAdvertisements((prevAds) => prevAds.filter((ad) => ad.id !== id));
      })
      .catch((error) => {
        alert("Error deleting ad. Check the console for more details.");
        console.error("Delete Error:", error.response || error.message);
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
              {advertisements.map((ad, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{ad.price}</td>
                  <td>{ad.location}</td>
                  <td>{ad.propertyType}</td>
                  <td>{ad.area}</td>
                  <td>{ad.contactName}</td>
                  <td>{ad.contactNumber}</td>
                  <td>
                    {ad.status&&<Button
                      className=""
                      onClick={() => {
                        setModelMsg(
                          `Do you want to ${
                            ad.status ? "Show" : "Hide"
                          } the advertisement?`
                        ),
                          setSelectedAddID(ad.ad_id),
                          setSelectedAddStatus(ad.status),
                          setModelShow(true);
                      }}
                    >
                      {ad.status ? "Show" : "Hide"}
                    </Button>}
                    {!ad.status&&<Button
                      className="btn btn-danger"
                      onClick={() => {
                        setModelMsg(
                          `Do you want to ${
                            ad.status ? "Show" : "Hide"
                          } the advertisement?`
                        ),
                          setSelectedAddID(ad.ad_id),
                          setSelectedAddStatus(ad.status),
                          setModelShow(true);
                      }}
                    >
                      {ad.status ? "Show" : "Hide"}
                    </Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmationModelBox
        message={modelMsg}
        show={modelShow}
        handleClose={() => setModelShow(false)}
        onClickFun={() => {
          getActionForAdvertisement(selectedAddID, !selectedAddStatus);
        }}
      />
    </div>
  );
};

export default AdminAds;
