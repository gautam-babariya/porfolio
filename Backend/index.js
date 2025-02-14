const express = require('express');
const app = express();
const PORT = 3000;
const Contactme = require('./model/contactme');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

// websocket 
const WebSocket = require('ws');
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });
const DataSchema = new mongoose.Schema({ value: String });
const Data = mongoose.model('Data', DataSchema);


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

// websocket 
wss.on('connection', ws => {
  ws.on('message', async message => {
    const data = JSON.parse(message);
    await Data.create(data);
    console.log(data);
    wss.clients.forEach(client => client.send(JSON.stringify(data)));
  });
});
app.get('/data', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

app.get('/', (req, res) => {
  res.send('gautam babariya portfolio');
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
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
