import { useAuth } from "../services/AuthService";
import Contact from "./Contact";
import About from "./About";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { use, useEffect } from "react";

function Home() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <>
      <div className="container mt-4">
        <Welcome />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default Home;