const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Registration = require("../models/Registration");

router.post("/bookings", async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send("Booking saved!");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/register", async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).send("Registration saved!");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
