import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthService";

function ProfilePage() {
    const { token, setToken } = useAuth();
    const { refreshToken, setRefreshToken } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile Updated:", formData);
    };

    const handleLogout = () => {
        setToken("");
        setRefreshToken("");
        navigate('/');
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <div className="col-4 col-lg-2">
                </div>

                {/* Main Content */}
                <div className="col-md-8 ms-sm-auto col-lg-10 px-md-4">
                    <h2 className="mt-4">Profile</h2>

                    {/* Personal Info */}
                    <div className="card my-4">
                        <div className="card-body">
                            <h5 className="card-title">Personal Information</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Password Change */}
                    <div className="card my-4">
                        <div className="card-body">
                            <h5 className="card-title">Change Password</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Current Password</label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        className="form-control"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        className="form-control"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-danger">
                                    Update Password
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Logout */}
                    <div className="card my-4">
                        <div className="card-body">
                            <h5 className="card-title">Logout</h5>
                            <button onClick={handleLogout} className="btn btn-danger">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
