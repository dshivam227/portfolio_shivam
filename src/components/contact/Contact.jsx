// import React, { useState } from "react";
import {  ToastContainer } from "react-toastify";
// import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [subject, setSubject] = useState("");
    // const [message, setMessage] = useState("");
    // const [loading, setLoading] = useState(false);

   

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                     Send me an email. 👋
                    </p>
                    <p className="contact__details">
                    dshivam227@gmail.com
                    </p>
                </div>

                {/* <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Insert your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder="Insert your subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form> */}
                <ToastContainer position="bottom-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;
