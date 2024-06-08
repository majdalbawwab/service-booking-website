const express = require('express');
const mongoose = require('mongoose');
const app = express();



const mongoURI = 'mongodb+srv://pc:5P9ePDGao5e4iaAm@cluster0.ekpmbas.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Import routes
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const serviceProviderRoutes = require('./routes/serviceProviderRoutes');

app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/serviceProviders', serviceProviderRoutes);

module.exports = app;
