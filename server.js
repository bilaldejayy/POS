// server.js
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/config');

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Import routes
const userRoutes = require('./routes/userRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes'); // Add invoice routes

app.use('/api/users', userRoutes);
app.use('/api/invoices', invoiceRoutes); // Add invoice routes

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
