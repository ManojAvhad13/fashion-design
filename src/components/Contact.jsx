import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/contact", formData);
            alert("Message sent successfully!");
        } catch (error) {
            alert("Error sending message.");
        }
    };

    return (
        <section className="contact bg-gray-50 py-16">
            <div className="container mx-auto text-center max-w-xl">
                <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                <p className="mb-6">Have any questions? Reach out to us and we'll get back to you shortly!</p>
                <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded"
                        required
                    />
                    <button type="submit" className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-700">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
