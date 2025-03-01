import { Link } from "react-router-dom";

function Login() {
    return (<>

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

    {/*log in Form*/}
          <form>
  

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" />
            </div>

          

            <div className="container d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>


    </>  );
}

export default Login;