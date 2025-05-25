import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userName } from "../store/userNameSlice";

async function registerUser(userData) {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      userData,
      {
        withCredentials: true,
      }
    );

    //
    return response.data;
  } catch (error) {
    // Axios provides the error response object
    if (error.response) {
      console.error("Error:", error.response.data.error); // Log the error message
      alert(`Error: ${error.response.data.error}`); // Show the error message
    } else {
      console.error("Error:", error.message); // Generic error (like network issues)
      alert(`Error: ${error.message}`);
    }
  }
}
const Login = () => {
  const navigate = useNavigate();
  const myName = useSelector((state) => state.userName.userNameVal.username);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await registerUser(formData);
    await dispatch(userName(userData.user));
    toast.success("User logged in successfully");


    // Clear the form data after submission
    setFormData({
      email: "",
      password: "",
    });


  
  


    // Redirect to dashboard with user's name
    navigate(`/dashboard`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
            <Link className="text-[#a5a4a48e]" to="/register">
              Create New Account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login{myName}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
