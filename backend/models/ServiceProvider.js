const mongoose = require('mongoose');

const ServiceProviderSchema = new mongoose.Schema({
  ServiceProviderID: { type: String, required: true, unique: true },
  ServiceCategory: { type: String, required: true },
  Name: { type: String, required: true },
  PhoneNO: { type: String, required: true },
  Availability: { type: Boolean, required: true },
});

module.exports = mongoose.model('ServiceProvider', ServiceProviderSchema);
