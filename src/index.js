const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const paymentRoutes = require('./routes/paymentRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());  // Adding Helmet to enhance security

// Routes
app.use('/api/v1', paymentRoutes);

const PORT = process.env.PORT || 8080;   
app.listen(PORT, () => {                                     // starting server with port 8080
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
