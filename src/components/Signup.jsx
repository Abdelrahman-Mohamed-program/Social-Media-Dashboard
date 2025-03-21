import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { AddUser, GetUsers } from "../../service/users.service";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useAxiosInstance from "../config/api";
import { motion } from "motion/react"
import { useAuth } from "../services/AuthService";

function Singup() {
  const  axios  = useAxiosInstance();
  const { setToken } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    loggedIn: false
  }
  )


  const [confirmPassword, setCofirmPassword] = useState("")
  const navigateToProfile=useNavigate();


  async function submit(event) {
    event.preventDefault()

    if (user.password === "" || confirmPassword === "" || user.email === "" || user.username=== "") {
        withReactContent(Swal).fire({// gives a empty input alert (from sweet alert libr.)
          icon: "error",
          title: "All inputs are required!",
          text: "Please fill all inputs",
        })
    } else {
      if ((user.password !== confirmPassword)) {//checks if the password is confirmed correctly
        withReactContent(Swal).fire({// gives a password not match alert 
          icon: "error",
          title: "Passwords do not match",
          text: "Oops! Your passwords don’t match. Double-check and try again",
        })
      } else {
        axios.post("/auth/register", user)
          .then(res => res.data)
          .then(data => {
             withReactContent(Swal).fire({
                icon:  "success",
                title: " Account created successfully! You can now log in.",
                text: `Welcome To our Dashboard, ${data.username}`,
               })
            navigateToProfile('/login')//navigate to logs in if response is true
          },err => {
            withReactContent(Swal).fire({
              icon: "error",
              title: "Error in register",
              text: `${err}`,
            })
          })
         
      }
    } 
  }


  return (<>
    <motion.div className="container mx-auto m-5" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} 
          transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.5 ,bounce: 0.4 },
            }} 
    >
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">

            {/* sign up page Header Section */}
            <div className="text-center mb-2">
              <h1 className="fs-3 fw-bold">Sign Up</h1>
              <p className="fs-6 text-muted">
                Already have an account?
                <Link to="/login" className="text-primary text-decoration-none fw-semibold"> Log in</Link>.
              </p>
            </div>

            {/*sign up Form*/}
            <form onSubmit={submit} >
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <motion.input  whileFocus={{ scale: 1.04}} whileHover={{ scale: 1.04 }} type="text" id="username" className="form-control" onChange={e => setUser({ ...user, username: e.target.value })}
                  placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <motion.input  whileFocus={{ scale: 1.04}} whileHover={{ scale: 1.04 }} type="email" autoComplete="off" id="email" className="form-control" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                  placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <motion.input  whileFocus={{ scale: 1.04}} whileHover={{ scale: 1.04 }} type="password" id="password" className="form-control" onChange={e => setUser({ ...user, password: e.target.value })}
                  placeholder="Enter your password" />
              </div>

              <div className="mb-5">
                <label htmlFor="confirmPassword" className="form-label">Repeat Password</label>
                <motion.input  whileFocus={{ scale: 1.04}} whileHover={{ scale: 1.04 }} type="text" id="confirmPassword" className="form-control" onChange={e => (setCofirmPassword(e.target.value))} placeholder="Confirm your password" />
              </div>

              <div className="container d-flex justify-content-center">
                <motion.button whileHover={{scale:1.1}} type="submit" className="btn btn-primary">Register</motion.button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </motion.div>

  </>);
}

export default Singup;