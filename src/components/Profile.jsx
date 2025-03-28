import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handlePersonalInfoSubmit = (e) => {
        e.preventDefault();
        console.log("Personal Info Updated:", userInfo);
    };

    const handlePasswordChangeSubmit = (e) => {
        e.preventDefault();
        if (userInfo.newPassword !== userInfo.confirmNewPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Password Changed Successfully!");
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Profile Settings</h2>

            {/* Personal Information Section */}
            <div className="card mb-4">
                <div className="card-header">Personal Information</div>
                <div className="card-body">
                    <form onSubmit={handlePersonalInfoSubmit}>
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" name="firstName" value={userInfo.firstName} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" name="lastName" value={userInfo.lastName} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" name="email" value={userInfo.email} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                </div>
            </div>

            {/* Security Information Section */}
            <div className="card">
                <div className="card-header">Security Information</div>
                <div className="card-body">
                    <form onSubmit={handlePasswordChangeSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Current Password</label>
                            <input type="password" className="form-control" name="currentPassword" value={userInfo.currentPassword} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <input type="password" className="form-control" name="newPassword" value={userInfo.newPassword} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm New Password</label>
                            <input type="password" className="form-control" name="confirmNewPassword" value={userInfo.confirmNewPassword} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-danger">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
