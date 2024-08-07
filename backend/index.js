const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ecommerce');

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});