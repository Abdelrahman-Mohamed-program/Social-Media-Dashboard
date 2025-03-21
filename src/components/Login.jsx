import {  useState } from "react";
import {  Link,  useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthService";
import useAxiosInstance from "../config/api";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
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
        console.log(data)
        setToken(data.accessToken)
        navigateToProfile('/')//logs in if response is true and go to the profile page
       },err=> withReactContent(Swal).fire({//show error if response is false
        icon: "error",
        title: "Error",
        text: `${err}`,
      })
    )

   
  }

  /** log in and sign up:-
   
   * add animation
   
   
   */
  return (
    <>
      <div className="container m-5 mx-auto">
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

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    onChange={e => setUser({ ...user, email: e.target.value })}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="container d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Log in!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;