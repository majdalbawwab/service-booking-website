const express = require('express');
const cors = require('cors'); // Add this line
const router = express.Router();
const Booking = require('../models/Booking');

router.use(cors()); // Enable CORS for all routes

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  const booking = new Booking({
    FullName: req.body.FullName,
    EmailAddress: req.body.EmailAddress,
    PhoneNumber: req.body.PhoneNumber,
    ServiceAddress: req.body.ServiceAddress,
    PreferredServiceDate: req.body.PreferredServiceDate,
    PreferredServiceTime: req.body.PreferredServiceTime,
    AdditionalDetails: req.body.AdditionalDetails,
    BookingTime: req.body.BookingTime,
    Username: req.body.Username,
    ServiceID: req.body.ServiceID,
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
