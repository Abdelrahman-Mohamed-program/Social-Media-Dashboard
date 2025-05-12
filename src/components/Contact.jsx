import { FiMail } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_o6yqe6e", // replace with your actual service ID
                "template_hosi08q", // replace with your template ID
                form.current,
                "Bf3j8CvIdzmJeXXqa" // replace with your public key
            )
            .then(
                (result) => {
                    console.log("Message sent:", result.text);
             withReactContent(Swal).fire({
                          icon: "success",
                          title: "Message sent succesfuly!",
                          text: `We will reach you soon`,
                        });
                    form.current.reset();
                },
                (error) => {
                   withReactContent(Swal).fire({
                          icon: "error",
                          title: "Message wasn't send",
                          text: `Please try again later`,
                        });
                }
            );
    };

    return (
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
                                        <form ref={form} onSubmit={sendEmail}>
                                            <div className="mb-3">
                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    rows="3"
                                                    placeholder="Your Message"
                                                    required
                                                ></textarea>
                                            </div>
                                            <button className="btn btn-primary w-100 text-white" type="submit">
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
    );
}

export default Contact;