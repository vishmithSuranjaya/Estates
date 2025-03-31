import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login_image from "../../assets/login_image.png";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter both email and password!");
      return;
    }

    setLoading(true);  // Show loading indicator

    try {
      const response = await axios.post("http://127.0.0.1:8000/members/login_user/", formData);

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("Login Successful! 🎉");
        console.log("Backend response:", response.data);
        console.log(response.data.user.userType)
        if (response.data.user.userType === "admin") {
          setTimeout(() => {
            navigate("/admin"); // Redirect
          }, 2000);
        } else {
          setTimeout(() => {
            navigate("/"); // Redirect
          }, 2000);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed! Please try again.");
    } finally {
      setLoading(false);  // Hide loading indicator
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-6 bg-cover bg-center" style={{ backgroundImage: `url(${login_image})` }}>
          <div className="bg-black/50 h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-6xl font-bold mb-4">Estates</h1>
            <p className="text-white font-bold max-w-lg">
              Welcome Back! Access your personalized dashboard to explore real estate opportunities.
            </p>
          </div>
        </div>

        <div className="col-span-6 flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-lg shadow-md p-8 w-96">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                disabled={loading}
                className={`w-full py-2 rounded-md transition duration-200 
                  ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white font-medium"}`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="flex justify-between w-full mt-4">
              <a href="/register" className="text-left text-blue-500 hover:underline">
                Don't have an account?
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
