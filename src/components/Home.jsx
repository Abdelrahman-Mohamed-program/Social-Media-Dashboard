import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FiArrowRight, FiBarChart2, FiSmartphone, FiUsers, FiMail, FiInfo } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();

    // Smooth scroll to section when page loads with hash
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    }, [location.hash]);

    return (
        <div className="landing-page">
            <div id="home"></div>

            {/* Intro Section */}
            <section className="Intro bg-gradient-primary text-white py-5 v-100 h-10 d-flex align-items-center">
                <div className="container text-center py-5">
                    <h1 className="display-4 fw-bold mb-4">
                        Transform Your Social Media Management
                    </h1>
                    <p className="lead mb-4">
                        Analyze, track, and optimize all your social channels in one powerful dashboard
                    </p>
                    <div className="cta-buttons">
                        <Link to="/signup" className="btn btn-light btn-lg me-3">
                            Get Started Free <FiArrowRight className="ms-2" />
                        </Link>
                        <Link to="#features" className="btn btn-outline-light btn-lg">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Key Features</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <FiBarChart2 className="display-4 text-blue mb-3 " />
                                    <h3>Real-time Analytics</h3>
                                    <p>Track engagement metrics, follower growth, and post performance across all platforms</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <FiSmartphone className="display-4 text-blue mb-3" />
                                    <h3>Multi-Platform Support</h3>
                                    <p>Connect and manage Facebook, Instagram, Twitter, LinkedIn, and more</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <FiUsers className="display-4 text-blue mb-3" />
                                    <h3>Team Collaboration</h3>
                                    <p>Share dashboards, assign tasks, and collaborate in real-time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-4">
                                <FiInfo className="me-2" />
                                About Our Platform
                            </h2>
                            <p className="lead mb-4">
                                A comprehensive solution for modern social media management needs
                            </p>
                            <div className="features-list">
                                <div className="d-flex mb-4">
                                    <div className="icon-box bg-primary text-white me-3">
                                        <FiBarChart2 size={24} />
                                    </div>
                                    <div>
                                        <h5>Advanced Analytics</h5>
                                        <p>Deep insights into post performance and audience demographics</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="icon-box bg-primary text-white me-3">
                                        <FiUsers size={24} />
                                    </div>
                                    <div>
                                        <h5>Collaboration Tools</h5>
                                        <p>Role-based access control and team management features</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="./analytics-demo.png"
                                alt="Analytics Preview"
                                className="img-fluid rounded-3 shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats bg-dark text-white py-5">
                <div className="container text-center">
                    <div className="row g-4">
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-blue">50K+</h2>
                            <p>Posts Analyzed Daily</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-blue">10k+</h2>
                            <p>Active Users</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-blue">20+</h2>
                            <p>Supported Platforms</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="display-4 fw-bold text-blue">24/7</h2>
                            <p>Customer Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section py-5 ">
                <div className="container-fluid px-0">
                    <div className="row justify-content-center mx-0">
                        <div className="col-12 col-lg-10 px-0 text-center">
                            <h2 className="fw-bold mb-3">
                                <FiMail className="me-2" />
                                Contact Us
                            </h2>
                            <p className="lead mb-3">
                                Have questions? Our support team is ready to help!
                            </p>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="card h-70 border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h5 className="mb-4">Send Message</h5>
                                            <form>

                                                <div className="mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Your Email"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <textarea
                                                        className="form-control"
                                                        rows="3"
                                                        placeholder="Your Message"
                                                    ></textarea>
                                                </div>
                                                <button className="btn btn-blue w-100 text-white">
                                                    Send Message
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-70 border-0 shadow-sm">
                                        <div className="card-body p-4">
                                            <h5 className="mb-4">Contact Info</h5>
                                            <div className="text-start">
                                                <p className="mb-3">
                                                    <strong>Email:</strong><br />
                                                    support@socialdashboard.com
                                                </p>
                                                <p className="mb-3">
                                                    <strong>Phone:</strong><br />
                                                    +20 100 100 1000
                                                </p>
                                                <p className="mb-3">
                                                    <strong>Office Hours:</strong><br />
                                                    Sun-Thu: 9AM - 5PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;