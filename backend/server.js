// server.js
const app = require('./app');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Ensure server shuts down gracefully
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process interrupted');
  });
});
