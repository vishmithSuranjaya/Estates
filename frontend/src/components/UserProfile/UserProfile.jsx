import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";
import "./UserProfile.css";
import Footer from "../Footer/Footer";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    image: "src/assets/user.jpg",
    fullName: "Agent Pakulla",
    nicnumber: "123456789V",
    address: "123 Urban Street, Cityville",
    contact_no: "0711234567",
    email: "agent.pakulla@example.com",
    district: "Colombo",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesView, setIsFavoritesView] = useState(false);

  const fetchFavorites = async () => {
    try {
      const data = [
        { title: "Property 1", image: "src/assets/pro1.jpg", description: "Luxury home.", price: "$250,000" },
        { title: "Property 2", image: "src/assets/pro1.jpg", description: "Modern apartment.", price: "$150,000" },
        { title: "Property 2", image: "src/assets/pro1.jpg", description: "Modern apartment.", price: "$150,000" },
        { title: "Property 2", image: "src/assets/pro1.jpg", description: "Modern apartment.", price: "$150,000" },
        { title: "Property 2", image: "src/assets/pro1.jpg", description: "Modern apartment.", price: "$150,000" },
        { title: "Property 2", image: "src/assets/pro1.jpg", description: "Modern apartment.", price: "$150,000" },
        { title: "Property 2", image: "src/assets/pro1.jpg", description: "Modern apartment.", price: "$150,000" },
        { title: "Property 2", image: "src/assets/pro1.jpg", description: "Modern apartment.", price: "$150,000" },
        { title: "Property 2", image: "src/assets/pro1.jpg", description: "Modern apartment.", price: "$150,000" },
      ];
      setFavorites(data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const handleFavoritesClick = () => {
    setIsFavoritesView(!isFavoritesView);
    if (!isFavoritesView) {
      fetchFavorites();
    }
  };

  const handleChangePassword = () => {
    setIsChangePasswordModalOpen(true);
  };

  const handleLogout = () => {
    console.log("Logged out!");
  };

  return (
    <div className="user-profile-container">
      <Navbar
        userProfile={profile}
        onFavoritesClick={handleFavoritesClick}
        onLogout={handleLogout}
        onChangePassword={handleChangePassword}
      />
      <div className="main-content">
        {isFavoritesView ? (
          <div>
            <h2>My Favorite Properties</h2>
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
            <h2>User Profile</h2>
            <div className="user-card">
              <img src={profile.image} alt="User" className="user-image" />
              <div className="user-info">
                <p><strong>Full Name:</strong> {profile.fullName}</p>
                <p><strong>NIC:</strong> {profile.nicnumber}</p>
                <p><strong>Address:</strong> {profile.address}</p>
                <p><strong>Contact No:</strong> {profile.contact_no}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>District:</strong> {profile.district}</p>
              </div>
              <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {isEditing && (
        <EditProfileModal
          profile={profile}
          setProfile={setProfile}
          closeModal={() => setIsEditing(false)}
        />
      )}

      {isChangePasswordModalOpen && (
        <ChangePasswordModal closeModal={() => setIsChangePasswordModalOpen(false)} />
      )}
   

    </div>
  );
};

export default UserProfile;
