const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  EmailAddress: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  ServiceAddress: { type: String, required: true },
  PreferredServiceDate: { type: Date, required: true },
  PreferredServiceTime: { type: String, required: true },
  AdditionalDetails: { type: String },
  BookingTime: { type: Date, default: Date.now }, // Automatically set the booking time to the current date and time
  Username: { type: String }, // Assuming you still need this field
  ServiceID: { type: String }, // Assuming you still need this field
});

module.exports = mongoose.model('Booking', BookingSchema);
