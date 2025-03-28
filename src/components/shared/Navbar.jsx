import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../services/AuthService";
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
    const { token } = useAuth();

    function signOut() {
        localStorage.removeItem("token")
        Navigate('/')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container ">
                    <Link className="navbar-brand fw-bold fs-4" to="/">Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {!token ?
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav d-flex w-100 justify-content-end ">
                                <li className="nav-item mx-2">
                                    <Link className="btn btn-primary fs-5" to="/login">Log in</Link>
                                </li>
                                <li className="nav-item mx-2 ">
                                    <Link className="btn btn-primary fs-5" to="/signup">Sign up</Link>
                                </li>
                            </ul>
                        </div> :
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav d-flex w-100 justify-content-end ">
                                <li className="nav-item mx-2 ">
                                    <Link onClick={signOut} className="btn btn-primary fs-5">Sign out!</Link>
                                </li>
                                <li className="nav-item mx-2 ">
                                    <Link to="/profile" className="btn btn-primary fs-5">
                                        <BsPersonCircle size={30} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;