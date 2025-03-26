"use client";
import React, { useState } from "react";
import axios from "axios";
import Calendly from "./Calendly";
import Toast from "./Toast";
import { FaCalendarAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = ({ bottomRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    if (name === "name") {
      setErrors((prev) => ({
        ...prev,
        name: value.length < 3 ? "Name must be at least 3 characters" : "",
      }));
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value) ? "Please enter a valid email" : "",
      }));
    } else if (name === "message") {
      setErrors((prev) => ({
        ...prev,
        message:
          value.length < 12 ? "Message must be at least 12 characters" : "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("/api/contact", formData);
      setToast({
        show: true,
        message: "Message sent successfully!",
        type: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setToast({
        show: true,
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.length >= 3 &&
      !errors.email &&
      formData.message.length >= 12
    );
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="splash services-bg w-full py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <p className="text-teal-400 text-3xl font-mono mb-2">CONTACT</p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's <span className="text-teal-400">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Open for freelance opportunities in Fullstack Development, QA
            Automation, and Email Development. Let's bring your ideas to life!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calendly Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
          >
            <div className="flex flex-col items-center text-center gap-6">
              <FaCalendarAlt className="text-teal-400 text-5xl" />
              <h3 className="text-2xl font-bold text-white">
                Schedule a Meeting
              </h3>
              <p className="text-gray-300">
                Book a time directly on my calendar for a consultation
              </p>
              <div className="mt-4">
                <Calendly />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
            ref={bottomRef}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Send Me a Message
            </h3>
            <p className="text-gray-400 mb-6">
              Have a project in mind? Let's discuss how I can help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none"
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  isFormValid()
                    ? "bg-teal-500 hover:bg-teal-600 text-white"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </div>
  );
};

export default Contact;
