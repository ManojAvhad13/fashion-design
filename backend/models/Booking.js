const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    details: String,
    date: {
        type: Date,
        default: Date.now, // Automatically sets the current date and time
    },
});

module.exports = mongoose.model("Booking", bookingSchema);
