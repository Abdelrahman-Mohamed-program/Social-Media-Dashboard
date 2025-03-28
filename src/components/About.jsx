import { FiBarChart2, FiInfo, FiUsers } from "react-icons/fi";

function About() {
    return (<>
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
    </>);
}

export default About;