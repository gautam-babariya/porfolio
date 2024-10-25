const express = require('express');
const app = express();
const PORT = 3000;
const Contactme = require('./model/contactme');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


// cors code 
app.use(cors())
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connect = async () => {
  try {
      const mongourl = process.env.VITE_MONGO_URL;
      const database = await mongoose.connect(mongourl)
      console.log("mongo conneted!");
  } catch (error) {
      console.log("error mongo" + error);
  }
}
connect();

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/contactme', async (req, res) =>  {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    var contactme = new Contactme({
      name,
      email,
      message,
    });
    await contactme.save();
    res.status(201).json(1);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Servers Error');
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
