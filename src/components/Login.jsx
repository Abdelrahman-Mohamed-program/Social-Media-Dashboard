import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { get_users } from "../../service/users.service";

function Login() {
  const [error, setError] = useState("")
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (user.email !== "" || user.password !== "") {
      setError("")
    }
  }, [user])

  const handleLogin = (e) => {
    e.preventDefault();

    if (user.email === "" || user.password === "") {
      setError("Please fill all the fields before submit")
      return;
    }

    setError("Invalid email or password");
    console.log(user);
  }

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

                {/* Error message box */}
                {error &&
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                }
                <div className="container d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">submit</button>
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