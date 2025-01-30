import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";

import "./UserProfile.css";
import { useParams } from "react-router-dom";
import axios from 'axios'

const UserProfile = () => {
    const { id } = useParams(); // Extract `id` from the URL
 
    const [profile, setProfile] = useState({
        full_name: "John Doe",
        nic_number: "123456789V",
        address: "123, Main Street, Colombo",
        contact_no: "0771234567",
        email: "johndoe@example.com",
        district: "Colombo",
        image: "src/assets/user.jpg"
    });
    
    const [isEditing, setIsEditing] = useState(false);
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
    const [favorites, setFavorites] = useState([
        { title: "Luxury Apartment", description: "A beautiful apartment in Colombo", price: "$200,000", image: "src/assets/pro1.jpg" },
        { title: "Cozy House", description: "A small cozy house in Kandy", price: "$150,000", image: "src/assets/pro1.jpg" }
    ]);
    const [isFavoritesView, setIsFavoritesView] = useState(false);

    const handleFavoritesClick = () => {
        setIsFavoritesView(!isFavoritesView);
    };

    const handleProfileUpdate = async (updatedProfile) => {
        setProfile(updatedProfile);
    };

    const handleChangePassword = () => {
        setIsChangePasswordModalOpen(true);
    };

    const handleLogout = () => {
        console.log("Logged out!");
    };

    const [user, setUser] = useState(null);
  const [selecteUser, setSelectedUser] = useState(null);


    const fetchUsers = async () => {
        console.log("id:", id); // Log the ad_id
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/members/get_users/`,
            {
              withCredentials: true,
            }
          );
          console.log("All users:", response.data);
          setUser(response.data);
    
          const foundAd = response.data.find((user) => user.id === Number(id));
          if (foundAd) {
            console.log("Found User:", foundAd);
            setSelectedUser(foundAd);
          } else {
            console.log("User not found.");
            // setError("User not found.");
          }
        } catch (error) {
          console.error(
            
            error.response || error.message
          );
        //   setError("Failed to fetch User. Please try again later.");
        }
      };
    
      useEffect(() => {
        fetchUsers();
      }, []);

    return (
       <div>
         <div className="user-profile-container">
            <Sidebar 
                userProfile={profile}
                onFavoritesClick={handleFavoritesClick}
                onLogout={handleLogout}
                onChangePassword={handleChangePassword}
            />
            <div className="main-content">
                {isFavoritesView ? (
                    <div>
                        <h1>My Favorite Properties</h1>
                        <ul className="favorites-list">
                            {favorites.map((item, index) => (
                                <li key={index} className="favorite-item">
                                    <div className="card">
                                        <img src={item.image} alt={item.title} className="card-image" />
                                        <div className="card-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                            <p><strong>Price:</strong> {item.price}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleFavoritesClick} className="back-btn">Back to Profile</button>
                    </div>
                ) : (
                    <div>
                        
                        <div className="user-card">
                        <h2>User Profile</h2>
                            <img src={profile.image} alt="User" className="user-image" />
                            <div className="userinfo">
                                <p><strong>Full Name:</strong> {selecteUser.first_name}{selecteUser.last_name}</p>
                                <p><strong>First Name:</strong> {selecteUser.first_name}</p>
                                <p><strong>Last Name:</strong> {selecteUser.last_name}</p>
                                <p><strong>Email:</strong> {selecteUser.email}</p>
                                
                            </div>
                            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
                        </div>
                    </div>
                )}
            </div>

            {isEditing && (
                <EditProfileModal
                    profile={profile}
                    setProfile={setProfile}
                    closeModal={() => setIsEditing(false)}
                    onUpdate={handleProfileUpdate}
                />
            )}

            {isChangePasswordModalOpen && (
                <ChangePasswordModal closeModal={() => setIsChangePasswordModalOpen(false)} />
            )}
        </div>
       </div>
    );
};

export default UserProfile;
