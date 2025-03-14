import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AddUser, GetUsers } from "../../service/users.service";
import useAxiosInstance from "../config/api";
import { useAuth } from "../services/AuthService";

function Singup() {
  const { axios } = useAxiosInstance();
  const { setToken } = useAuth();

  const [User, setUser] = useState({
    user_name: "",
    email: "",
    password: "",
    logged_in: false
  }
  )
  const [Users, setUsers] = useState([])
  const [CheckUser, setCheckUser] = useState(false)
  const [ConfirmPassword, setCofirmPassword] = useState("")
  const [CheckPassword, setCheckPassword] = useState(true)
  const [CheckEmpty, setCheckEmpty] = useState(false)




  useEffect(() => {//gets users from the end point and focuses on the first input when rendering
    GetUsers().then(res => setUsers(res.data))

  }, [])

  useEffect(() => {//remove the already regestered alert when typing the email again
    setCheckUser(false)
  }, [User.email])


  useEffect(() => {//remove the effect of empty alert when typing again
    if (User.password != "" || ConfirmPassword != "" || User.email != "" || User.user_name != "") {
      setCheckEmpty(false)
    }
  }, [User, ConfirmPassword])



  useEffect(() => {//remove the effect of comfirmed password alert when typing password again
    setCheckPassword(true)
  }, [User.password, ConfirmPassword])


  async function sign_up(event) {
    event.preventDefault()
    if (User.password == "" || ConfirmPassword == "" || User.email === "" || User.user_name == "") {
      setCheckEmpty(true)
    } else {
      if ((User.password != "" && ConfirmPassword == "") || (ConfirmPassword != "" && User.password !== ConfirmPassword)) {
        setCheckPassword(false)
      } else {
        // if (Users.filter(u => u.email === User.email).length == 1) {//check if user is aleardy in the data base
        //   setCheckUser(true)
        // }
        // else {//will add user if first time signing up with email
        //   // const updatedUser = { ...User, logged_in: true };
        //   // setUser(updatedUser);
        //   // await AddUser(updatedUser);
        //   // GetUsers().then(res => setUsers(res.data))

        // }

        axios.post("/auth/register", User)
          .then(res => res.data)
          .then(data => {
            console.log(data);
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  }


  return (<>
    <div className="container mx-auto m-5">
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
            <form onSubmit={sign_up} >
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" id="username" className="form-control" onChange={e => setUser({ ...User, user_name: e.target.value })}
                  placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" autoComplete="off" id="email" className="form-control" onChange={(e) => { setUser({ ...User, email: e.target.value }) }}
                  placeholder="Enter your email" />
                {(CheckUser) && <div className="alert alert-danger" role="alert">
                  this email is already Registered please  <Link to="/login" className="text-primary text-decoration-none fw-semibold"> Log in</Link>.
                  or use another email
                </div>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" onChange={e => setUser({ ...User, password: e.target.value })}
                  placeholder="Enter your password" />
              </div>

              <div className="mb-5">
                <label htmlFor="confirmPassword" className="form-label">Repeat Password</label>
                <input type="text" id="confirmPassword" className="form-control" onChange={e => (setCofirmPassword(e.target.value))} placeholder="Confirm your password" />
                {(!CheckPassword) && <div className="alert alert-danger" role="alert">
                  please re-enter the password correctly
                </div>}
              </div>

              {(CheckEmpty) && <div className="alert alert-danger" role="alert">
                please Fill all the fields before submit
              </div>}
              <div className="container d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

  </>);
}

export default Singup;