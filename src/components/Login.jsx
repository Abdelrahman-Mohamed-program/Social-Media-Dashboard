import { Link } from "react-router-dom";

function Login() {
    return (<>
    {/* log in page header */}
    <div className="container text-center mt-4">
  <h1 className="fs-3 fw-bold">Log in page</h1>
  <p className="fs-6 text-muted mt-2">
    Don't have an acount?
    <Link to="/signup" className="text-primary text-decoration-none fw-semibold"> sign up</Link>.
  </p>
</div>
   
{/* log in form */}
    <form className="m-3">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" placeholder="Enter your password" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </>  );
}

export default Login;