const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/dockerdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Connected to MongoDB through Docker Compose!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
