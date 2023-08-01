const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const securityMiddleware = require('./middlewares/securityMiddleware');

// Read the PORT environment variable or set a default value (e.g., 3000)
const port = process.env.PORT || 3000;

// Apply security middleware globally
app.use(securityMiddleware);

// Parse incoming JSON data
app.use(express.json());

// Register API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
  
  // Start the server on the specified port
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  module.exports = app;