import { useAuth } from "../services/AuthService";
import Contact from "./Contact";
import About from "./About";

function Home() {
  const { token } = useAuth();
  return (
    <>
      {!token ?
        <div className="container text-center mt-4">
          <About />
          <Contact />
        </div>
        :
        <div className="container text-center mt-4">

          <h1 className="fs-3 fw-bold">Welcome! Thank you For using our social media Dashboard!</h1>

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