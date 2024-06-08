const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  ServiceID: { type: String, required: true, unique: true },
  ServiceName: { type: String, required: true },
  Price: { type: Number, required: true },
  ServiceProviderID: { type: String, required: true },
  Description: { type: String, required: true },
  Category: { type: String, required: true },
});

module.exports = mongoose.model('Service', ServiceSchema);
