import { FiMail } from "react-icons/fi";

function Contact() {
    return (
        <>
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
        </>
    );
}

export default Contact;