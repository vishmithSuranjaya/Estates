import { FaHome, FaListAlt, FaHeart, FaSignOutAlt, FaKey } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ userProfile, onFavoritesClick, onLogout, onChangePassword }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Real Estate</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/home">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="/property-list">
              <FaListAlt /> Property List
            </a>
          </li>
          <li onClick={onFavoritesClick}>
            <a href="#">
              <FaHeart /> My Favorite
            </a>
          </li>
          <li onClick={onChangePassword}>
            <a href="#">
              <FaKey /> Change Password
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="user-profile">
          <img src={userProfile.image} alt="User" className="user-photo" />
          <span className="username">{userProfile.fullName}</span>
          <FaSignOutAlt onClick={onLogout} className="logout-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
