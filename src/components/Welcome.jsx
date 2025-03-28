import React from 'react'
import { Link } from 'react-router-dom'
import { FaChartBar, FaSignInAlt, FaUserPlus } from 'react-icons/fa'

const Welcome = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h1 className="display-4 fw-bold">Welcome to Our Social Media Dashboard</h1>
            <p className="text-muted">
                Track, analyze, and optimize your social media presence with ease.
            </p>

            <div className="row mt-4 w-100">
                <div className="col-md-4">
                    <FaChartBar size={50} className="text-primary mb-3" />
                    <h5>Powerful Analytics</h5>
                    <p className="text-muted">
                        Get real-time insights and trends for your social media performance.
                    </p>
                </div>

                <div className="col-md-4">
                    <FaSignInAlt size={50} className="text-success mb-3" />
                    <h5>Easy Access</h5>
                    <p className="text-muted">
                        Log in to track your progress and manage multiple accounts seamlessly.
                    </p>
                </div>

                <div className="col-md-4">
                    <FaUserPlus size={50} className="text-warning mb-3" />
                    <h5>Join Us</h5>
                    <p className="text-muted">
                        Create an account to unlock advanced analytics and personalized insights.
                    </p>
                </div>
            </div>

            <div className="mt-4">
                <Link to="/login" className="btn btn-primary me-2">
                    <FaSignInAlt className="me-1" /> Login
                </Link>
                <Link to="/signup" className="btn btn-outline-primary">
                    <FaUserPlus className="me-1" /> Sign Up
                </Link>
            </div>
        </div>
    )
}

export default Welcome