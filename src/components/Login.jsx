import {  useState } from "react";
import {  Link,  useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthService";
import useAxiosInstance from "../config/api";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { motion } from "motion/react"
function Login() {

  const {setToken}=useAuth();

  const axios=useAxiosInstance();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const navigateToProfile=useNavigate();
  

  const handleLogin = (event) => {
    event.preventDefault();

      if (user.email == "" || user.password == "") {
        withReactContent(Swal).fire({// gives a empty input alert
                 icon: "error",
                 title: "All inputs are required!",
                 text: "Please fill all inputs",
               })
               return;
       }
    
       
       axios.post('/auth/login',user)//check user auth.
       .then(res=>res.data)
       .then(data=>{
          withReactContent(Swal).fire({
                 icon:  "success",
                 title: "Logged in succesfully!",
                 text: `Welcome back ${data.username}`,
                  })
        setToken(data.accessToken)
        navigateToProfile('/')//logs in if response is true and go to the profile page
       },err=> withReactContent(Swal).fire({//show error if response is false
        icon: "error",
        title: "Error",
        text: `Invalid email or password`,
      })
    )

   
  }

  
  return (
    <>
      <motion.div  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} 
          transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.5 ,bounce: 0.4 },
            }} //animations using motion libarary
      
      className="container m-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm p-4">
              {/* log in page Header Section */}
              <div className="text-center mb-2">
                <h1 className="fs-3 fw-bold">Log in</h1>
                <p className="fs-6 text-muted">
                  Don't have an account?
                  <Link to="/signup" className="text-primary text-decoration-none fw-semibold"> sign up</Link>.
                </p>
              </div>


              {/* log in Form */}
              <form onSubmit={handleLogin}>

                <div   className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <motion.input
                   whileFocus={{ scale: 1.04 }} whileHover={{ scale: 1.04 }}
                    type="email"
                    id="email"
                    onChange={e => setUser({ ...user, email: e.target.value })}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div  className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <motion.input
                   whileFocus={{ scale: 1.04}} whileHover={{ scale: 1.04 }}
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="container d-flex justify-content-center">
                  <motion.button whileHover={{scale:1.1}} type="submit" className="btn btn-primary">Log in!</motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Login;