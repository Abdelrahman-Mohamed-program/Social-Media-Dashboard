import { FaHandshake, FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";

function About() {
    return (<>
        <section id="about" className="about-section py-5">
            <div className="container my-5">
                <h2 className="text-center mb-4 fw-bold">About Us</h2>
                <p className="text-muted text-center">
                    Welcome to our social media dashboard! Our platform is designed to help you track, analyze, and enhance your social media presence effortlessly.
                </p>
                <div className="row text-center mt-5">
                    <div className="col-md-6 mb-4">
                        <FaBullseye size={40} className="text-primary mb-2" />
                        <h4>Our Mission</h4>
                        <p>
                            To provide an intuitive and data-driven platform that empowers users to optimize their social media engagement with ease.
                        </p>
                    </div>

                    <div className="col-md-6 mb-4">
                        <FaLightbulb size={40} className="text-warning mb-2" />
                        <h4>Our Vision</h4>
                        <p>
                            We aim to revolutionize social media analytics by offering real-time insights and actionable data for content creators and businesses.
                        </p>
                    </div>

                    <div className="col-md-6 mb-4">
                        <FaUsers size={40} className="text-success mb-2" />
                        <h4>Our Team</h4>
                        <p>
                            A passionate group of developers, designers, and social media experts working together to build a user-friendly dashboard.
                        </p>
                    </div>

                    <div className="col-md-6 mb-4">
                        <FaHandshake size={40} className="text-info mb-2" />
                        <h4>Our Commitment</h4>
                        <p>
                            We are committed to continuous improvement, ensuring that our platform evolves to meet the ever-changing social media landscape.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default About;