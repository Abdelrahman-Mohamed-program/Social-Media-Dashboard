import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthService";
import useAxiosInstance from "../config/api";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { motion } from "motion/react"
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const { setToken } = useAuth();
  const axios = useAxiosInstance();

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const navigateToProfile = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.email == "" || user.password == "") {
      withReactContent(Swal).fire({ // gives a empty input alert
        icon: "error",
        title: "All inputs are required!",
        text: "Please fill all inputs",
      });
      return;
    }

    axios.post(
      '/auth/login', user
    ).then(
      res => res.data
    ).then(data => {
      withReactContent(Swal).fire({
        icon: "success",
        title: "Logged in succesfully!",
        text: `Welcome back ${data.username}`,
      });
      setToken(data.accessToken)
      navigateToProfile('/')
    }).catch(err => {
      withReactContent(Swal).fire({ //show error if response is false
        icon: "error",
        title: "Error",
        text: `Invalid email or password`,
      })
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          {/* <a href="/forgot-password" className="text-decoration-none">
            Forgot password?
          </a> */}
          <p className="mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;