import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        class: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/register", formData);
            alert("Registration successful!");
        } catch (error) {
            alert("Error during registration.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">Register for Fashion Classes</h2>
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                required
            />
            <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                required
            >
                <option value="">Select Class</option>
                <option value="Beginner">Beginner Level</option>
                <option value="Intermediate">Intermediate Level</option>
                <option value="Advanced">Advanced Level</option>
            </select>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
