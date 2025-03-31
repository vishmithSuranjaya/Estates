import { FaHome, FaListAlt, FaHeart, FaSignOutAlt, FaKey } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ userProfile, onFavoritesClick, onLogout, onChangePassword }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">Real Estate</h1>
         <div className="user-info">
          <img src={userProfile.image} alt="User" className="user-photo" />
          <span className="username">{userProfile.full_name}</span>
        </div> 
      </div>
      <ul className="sidebar-links">
        <li>
          <a href="/">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a href="/search_filter">
            <FaListAlt /> Property List
          </a>
        </li>
        
        <li onClick={onChangePassword}>
          <a href="#">
            <FaKey /> Change Password
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
       
        <button onClick={onLogout} className="logout-button">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
