const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services or services by category
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let services;
    if (category) {
      services = await Service.find({ Category: category });
    } else {
      services = await Service.find();
    }
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new service
router.post('/', async (req, res) => {
  const service = new Service({
    ServiceID: req.body.ServiceID,
    ServiceName: req.body.ServiceName,
    Price: req.body.Price,
    ServiceProviderID: req.body.ServiceProviderID,
    Description: req.body.Description,
    Category: req.body.Category,
  });

  try {
    const newService = await service.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
