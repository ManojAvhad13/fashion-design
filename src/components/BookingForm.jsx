import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", details: "" });
    const [alertMessage, setAlertMessage] = useState({ message: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email and phone
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setAlertMessage({ message: "Please enter a valid email address.", type: "error" });
            return;
        }

        if (formData.phone.length !== 10) {
            setAlertMessage({ message: "Phone number must be 10 digits long.", type: "error" });
            return;
        }

        try {
            // Send data to backend
            const response = await axios.post("http://localhost:5000/api/bookings", formData);

            // Check response and set success message
            if (response.status === 201 || response.status === 200) {
                setAlertMessage({ message: "Booking request sent successfully!", type: "success" });
                setFormData({ name: "", email: "", phone: "", details: "" });
            } else {
                throw new Error("Failed to save data. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setAlertMessage({ message: "Error submitting the form. Please check your connection or try again later.", type: "error" });
        }
    };

    return (
        <div className="relative min-h-screen p-8 justify-center bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/designbg1.jpg")' }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

            <form onSubmit={handleSubmit} className="relative z-10 max-w-lg mx-auto p-8 bg-white bg-opacity-70 shadow-xl rounded-lg mt-1 mb-1 transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Custom Booking</h2>

                {/* Alert Message */}
                {alertMessage.message && (
                    <div className={`mb-6 p-4 text-white rounded-lg ${alertMessage.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
                        <p className="text-center">{alertMessage.message}</p>
                    </div>
                )}

                {/* Name Input */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="Your Name"
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        type="email"
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="Your Email"
                        required
                    />
                </div>

                {/* Phone Input */}
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Your Mobile Number</label>
                    <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        type="number"
                        onInput={(e) => {
                            if (e.target.value.length > 10) {
                                e.target.value = e.target.value.slice(0, 10);
                            }
                            setFormData({ ...formData, phone: e.target.value });
                        }}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="Your Mobile Number"
                        required
                    />
                </div>

                {/* Details Textarea */}
                <div className="mb-6">
                    <label htmlFor="details" className="block text-gray-700 font-medium mb-2">Design Details</label>
                    <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="Design Details"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
