"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Calendly from "./Calendly";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (value.length < 3) {
            setNameError("Name must be at least 3 characters long");
        } else {
            setNameError("");
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage(value);
        if (value.length < 12) {
            setMessageError("Message must be at least 12 characters long");
        } else {
            setMessageError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            // Send email using EmailJS
            emailjs
                .send(
                    "service_trrb7en",
                    "template_es2q4vi",
                    {
                        from_name: e.target.user_name.value,
                        from_email: e.target.user_email.value,
                        message: e.target.message.value,
                    },
                    "FgZw1iF1rmSp0Y5FY"
                )
                .then((response) => {
                    console.log("Email sent successfully:", response);
                    // Optionally, you can reset the form fields here
                    setName("");
                    setEmail("");
                    setMessage("");
                })
                .catch((error) => {
                    console.error("Email send failed:", error);
                });
        }
    };

    const isFormValid = () => {
        return name.length >= 3 && emailError === "" && message.length >= 12;
    };

    return (
        <div className="flex gap-10 box-border p-5 flex-col items-center splash services-bg w-screen relative">
            <div className="flex flex-col justify-center items-center">
                <p className="text-gray-400 text-sm">GET IN TOUCH</p>
                <h4 className="text-white text-3xl">
                    Contact <span className="text-teal-400">Me</span>
                </h4>
                <h5 className="w-[300px] md:w-[500px] text-xl lg:w-[900px] text-white text-center">
                    I am currently open for any kind of work in Frontend
                    Development or Fullstack Development, whether it is
                    full-time, freelance, contract, or part-time.
                </h5>
            </div>
            <div className="about-skills justify-center items-center flex flex-wrap gap-20 box-border p-4 md:p-5 lg:p-12 rounded-xl">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h5 className="text-teal-400 text-xl font-semibold">
                        Click the button down below to
                    </h5>
                    {/* Assuming Calendly is a component */}
                    <Calendly />
                </div>

                <div className="flex flex-col gap-7">
                    <div>
                        <h5 className="text-white text-2xl">
                            Have an awesome project idea?
                        </h5>
                        <h5 className="text-teal-400 text-3xl">
                            Let's Discuss.
                        </h5>
                    </div>
                    <form
                        className="flex flex-col gap-3"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <h6 className="text-white">Full Name</h6>
                            <input
                                placeholder="Enter Name"
                                type="text"
                                name="user_name"
                                className="bg-transparent border text-white border-gray-400 rounded-xl w-[300px] md:w-[500px] box-border p-2 "
                                value={name}
                                onChange={handleNameChange}
                            />
                            {nameError && (
                                <div className="text-red-500">{nameError}</div>
                            )}
                        </div>
                        <div>
                            <h6 className="text-white">Email Address</h6>
                            <input
                                placeholder="Enter Email"
                                type="email"
                                name="user_email"
                                className="bg-transparent text-white border border-gray-400 rounded-xl w-[300px] md:w-[500px] box-border p-2  "
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && (
                                <div className="text-red-500">{emailError}</div>
                            )}
                        </div>
                        <div className="">
                            <h6 className="text-white">Message</h6>
                            <textarea
                                placeholder="Enter Message"
                                name="message"
                                className="bg-transparent text-white border w-[300px] md:w-[500px] border-gray-400 rounded-xl box-border p-2 "
                                value={message}
                                onChange={handleMessageChange}
                            />
                            {messageError && (
                                <div className="text-red-500">
                                    {messageError}
                                </div>
                            )}
                        </div>

                        <button
                            className="bg-teal-400 cursor-pointer text-slate-800 box-border p-3 w-[150px]"
                            disabled={!isFormValid()}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
