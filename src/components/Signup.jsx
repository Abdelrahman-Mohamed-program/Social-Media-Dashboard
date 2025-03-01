import { Link } from "react-router-dom";

function Singup() {
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
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" id="username" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" />
            </div>

            <div className="mb-5">
              <label htmlFor="confirmPassword" className="form-label">Repeat Password</label>
              <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm your password" />
            </div>

            <div className="container d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>

    </>  );
}

export default Singup;