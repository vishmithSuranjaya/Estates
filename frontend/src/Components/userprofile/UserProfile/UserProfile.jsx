import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./UserProfile.css";

const UserProfile = () => {
    const { id } = useParams(); // Extract `id` from the URL
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
    const [favorites, setFavorites] = useState([
        { title: "Luxury Apartment", description: "A beautiful apartment in Colombo", price: "$200,000", image: "src/assets/pro1.jpg" },
        { title: "Cozy House", description: "A small cozy house in Kandy", price: "$150,000", image: "src/assets/pro1.jpg" }
    ]);
    const [isFavoritesView, setIsFavoritesView] = useState(false);

    const fetchUsers = async () => {
        console.log("Fetching user with ID:", id);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/members/get_users/`, {
                withCredentials: true,
            });

            console.log("All users:", response.data);

            // Find the user with the matching ID
            const foundUser = response.data.find((user) => user.id === Number(id));

            if (foundUser) {
                console.log("Selected User:", foundUser);
                setSelectedUser(foundUser);
            } else {
                console.log("User not found.");
            }
        } catch (error) {
            console.error("Error fetching users:", error.response || error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [id]);

    const handleFavoritesClick = () => {
        setIsFavoritesView(!isFavoritesView);
    };

    const handleProfileUpdate = async (updatedProfile) => {
        setSelectedUser(updatedProfile);
    };

    const handleChangePassword = () => {
        setIsChangePasswordModalOpen(true);
    };

    const handleLogout = () => {
        console.log("Logged out!");
    };

    return (
        <div className="user-profile-container">
            <Sidebar 
                userProfile=""
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
                    <div className="user-card">
                        <h2>User Profile</h2>
                        <img src="" alt="User" className="user-image" />
                        <div className="userinfo">
                            {selectedUser ? (
                                <>
                                    <p><strong>Full Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</p>
                                    <p><strong>First Name:</strong> {selectedUser.first_name}</p>
                                    <p><strong>Last Name:</strong> {selectedUser.last_name}</p>
                                    <p><strong>Email:</strong> {selectedUser.email}</p>
                                </>
                            ) : (
                                <p>Loading user data...</p>
                            )}
                        </div>
                        <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
                    </div>
                )}
            </div>

            {isEditing && (
                <EditProfileModal
                    profile={selectedUser}
                    setProfile={setSelectedUser}
                    closeModal={() => setIsEditing(false)}
                    onUpdate={handleProfileUpdate}
                />
            )}

            {isChangePasswordModalOpen && (
                <ChangePasswordModal closeModal={() => setIsChangePasswordModalOpen(false)} />
            )}
        </div>
    );
};

export default UserProfile;
