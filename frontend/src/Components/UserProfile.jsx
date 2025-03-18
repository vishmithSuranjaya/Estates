import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar1 from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const UserProfile = () => {
  const { id } = useParams(); // Extract `id` from the URL
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFormData({
        first_name: parsedUser.first_name || "",
        last_name: parsedUser.last_name || "",
        email: parsedUser.email || "",
        password: "",
      });
    } else {
      navigate("/login"); // Redirect to login if no user found
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://127.0.0.1:8000/members/update_user/${user.id}/`, formData);

      if (response.data.success) {
        toast.success("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Update local storage
        setUser(response.data.user);
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar1 />
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">User Profile</h2>
          
          {user ? (
            <form className="space-y-4" onSubmit={handleUpdate}>
              <div>
                <label className="block text-sm font-medium text-gray-600">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 bg-gray-200 cursor-not-allowed"
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">New Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Leave blank to keep current password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-200"
              >
                Update Profile
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md transition duration-200 mt-4"
              >
                Logout
              </button>
            </form>
          ) : (
            <p className="text-center text-gray-600">Loading...</p>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
