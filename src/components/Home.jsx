import { Link } from "react-router-dom";
import { useAuth } from "../services/AuthService";
function Home() {
    const { token } = useAuth();
  return (
    <>
    {!token?
      <div className="container text-center mt-4">
        <h1 className="fs-3 fw-bold">Welcome to our social media dashboard!</h1>
        <p className="fs-6 text-muted mt-2">
          If you are new to our social media dashboard, please
          <Link to="/signup" className="text-primary text-decoration-none fw-semibold"> sign up</Link>.
        </p>
        <p className="fs-6 text-muted">
          Already have an account?
          <Link to="/login" className="text-primary text-decoration-none fw-semibold"> log in</Link>.
        </p>
      </div>
      :
      <div className="container text-center mt-4">

        <h1 className="fs-3 fw-bold">Welcome Thank you For using our social media Dashboard!</h1>

        <p className="fs-6 text-muted mt-2">
        
        </p>

        <p className="fs-6 text-muted">
         
        </p>
      </div>
}
    </>
  );
}

export default Home;