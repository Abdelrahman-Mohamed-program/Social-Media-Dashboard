import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useAxiosInstance from "../config/api";
import { motion } from "motion/react"
import { useAuth } from "../services/AuthService";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Singup() {
  const axios = useAxiosInstance();
  const { setToken, setUserID, setRefreshToken, setUsername } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigateToProfile = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault()

    if (user.password === "" || user.email === "" || user.username === "") {
      withReactContent(Swal).fire({ // gives a empty input alert (from sweet alert libr.)
        icon: "error",
        title: "All inputs are required!",
        text: "Please fill all inputs",
      });
      return;
    }

    if (user.password !== user.confirmPassword) { // Checks if the password is confirmed correctly
      withReactContent(Swal).fire({ // gives a password not match alert 
        icon: "error",
        title: "Passwords do not match",
        text: "Oops! Your passwords don't match. Double-check and try again",
      });
      return;
    }

    axios.post(
      "/auth/register", user
    ).then(
      res => res.data
    ).then(data => {
      withReactContent(Swal).fire({
        icon: "success",
        title: " Account created successfully!",
        text: `Welcome To our Dashboard, ${data.username}`,
      });
      setToken(data.accessToken)
      setUserID(data.userID)
      setRefreshToken(data.refreshToken)
      setUsername(data.username)
     navigateToProfile('/') // navigate to logs in if response is true
    }).catch(err => {
      withReactContent(Swal).fire({
        icon: "error",
        title: "Error in register",
        text: `${err}`,
      });
    });
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
          <h2 className="text-center mb-4">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={user.username}
                  onChange={e => setUser({ ...user, username: e.target.value })}
                
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={user.email}
                  onChange={e => setUser({ ...user, email: e.target.value })}
                 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={user.password}
                  onChange={e => setUser({ ...user, password: e.target.value })}
               
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={e => setUser({ ...user, confirmPassword: e.target.value })}
            
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>

          {/* Already have an account? */}
          <div className="text-center mt-3">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singup;