const express = require('express');
const router = express.Router();
const ServiceProvider = require('../models/ServiceProvider');

// Get all service providers
router.get('/', async (req, res) => {
  try {
    const serviceProviders = await ServiceProvider.find();
    res.json(serviceProviders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new service provider
router.post('/', async (req, res) => {
  const serviceProvider = new ServiceProvider({
    ServiceProviderID: req.body.ServiceProviderID,
    ServiceCategory: req.body.ServiceCategory,
    Name: req.body.Name,
    PhoneNO: req.body.PhoneNO,
    Availability: req.body.Availability,
  });

  try {
    const newServiceProvider = await serviceProvider.save();
    res.status(201).json(newServiceProvider);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
