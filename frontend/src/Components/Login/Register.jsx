import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login_image from "../../assets/login_image.png";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("first_name", formData.firstName);
    data.append("last_name", formData.lastName);
    data.append("email", formData.email);
    data.append("password", formData.password);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/members/register_user/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.success("User successfully registered! 🎉", {
          duration: 3000,
        });
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      console.error("Error during registration:", error.response || error.message);
      toast.error("Error during registration. Try again! ❌", {
        duration: 3000,
      });
    }
  };

  return (
    <div>
      {/* Toaster positioned at the top right */}
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="grid grid-cols-12 h-screen">
        <div
          className="col-span-6 bg-cover bg-center"
          style={{ backgroundImage: `url(${login_image})` }}
        >
          <div className="bg-black/50 h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-6xl font-bold mb-4">Estates</h1>
            <p className="text-white font-bold max-w-lg">
              Welcome Back! Access your personalized dashboard to explore the
              best real estate opportunities tailored just for you. Log in to manage
              your saved listings, schedule property viewings, and stay updated
              with the latest market trends.
            </p>
          </div>
        </div>

        <div className="col-span-6 flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-lg shadow-md p-8 w-96">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Sign Up
              </button>
            </form>

            <div className="flex justify-between w-full mt-4">
              <a href="/login" className="text-left text-blue-500 hover:underline">
                Already have an account?
              </a>
              <a href="/" className="text-right text-red-500 hover:underline">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
