const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const alertRouter = require('./routes/complane.routes');

const app = express();
const PORT = process.env.PORT || 8090;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('alert');
});

app.use('/alert', alertRouter);

app.listen(PORT, async () => {
  await connectDB();
  console.log("Server listening on port 8090");
});