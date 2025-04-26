const express = require('express');
const app = express();
const PORT = 3001;
const Contactme = require('./model/contactme');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
// const axios = require('axios');


// cors code 
app.use(cors())
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

app.get('/', (req, res) => {
  res.send('gautam babariya portfolio');
});

// app.post('/contactme', async (req, res) =>  {
//   try {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;
//     var contactme = new Contactme({
//       name,
//       email,
//       message,
//     });
//     await contactme.save();
//     res.status(201).json(1);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Servers Error');
//   }
// })

// const transporter = nodemailer.createTransport({
//   host: 'smtp.zoho.in',
//   port: 465, // use 587 if you want TLS
//   secure: true, // true for 465, false for 587
//   auth: {
//     user: 'plive@plivecreation.icu',
//     pass: 'mdqcPxvqjxgw', // replace with your actual email password
//   },
// });

// const mailOptions = {
//   from: 'plive@plivecreation.icu',
//   to: 'gautambabariya0125@gmail.com',
//   subject: 'Test Email from Node.js plive@plive',
//   html: '<h3>This is a test email sent from Node.js using your Hostinger email.</h3>',
// };

// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.error('Error sending email:', error);
//   }
//   console.log('Email sent successfully:', info.response);
// });

// Start the server


// const CLIENT_ID = '1000.T33QWGZILUG46ORZTGMULG3Y8ZVA5K';
// const CLIENT_SECRET = '74d882fe5c44decd57383f4c3ecfb840d1ed771908';
// const REFRESH_TOKEN = '1000.2abd1b8631875e3767efef1bfee79a4b.7aa63e5c1263d30e354b721e93a02c97';

// // ====== In-memory Token Storage ======
// let accessToken = null;
// let tokenGeneratedTime = null;

// // ====== Function to Refresh Access Token ======
// const refreshAccessToken = async () => {
//   const response = await axios.post('https://accounts.zoho.in/oauth/v2/token', null, {
//     params: {
//       refresh_token: REFRESH_TOKEN,
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//       grant_type: 'refresh_token',
//     },
//   });

//   accessToken = response.data.access_token;
//   tokenGeneratedTime = Date.now();
//   console.log("✅ New access token generated");

//   return accessToken;
// };

// // ====== Function to Get Valid Access Token ======
// const getValidAccessToken = async () => {
//   if (!accessToken || !tokenGeneratedTime) {
//     console.log("❗ No token available, refreshing...");
//     return await refreshAccessToken();
//   }

//   const currentTime = Date.now();
//   const tokenAge = (currentTime - tokenGeneratedTime) / 1000; // in seconds

//   if (tokenAge > 3500) { // If older than ~58 minutes
//     console.log("⚠️  Access token expired, refreshing...");
//     return await refreshAccessToken();
//   }

//   console.log("✅ Using existing access token");
//   return accessToken;
// };

// // ====== Example Usage ======
// const sendZohoMail = async () => {
//   const token = await getValidAccessToken();

//   try {
//     const response = await axios.post(
//       'https://mail.zoho.in/api/accounts/6975452000000002002/messages',
//       {
//         fromAddress: "plive@plivecreation.icu",
//         toAddress: "gautambabariya0125@gmail.com",
//         subject: "OTP Verification",
//         content: "Your OTP is 12356",
//       },
//       {
//         headers: {
//           Authorization: `Zoho-oauthtoken ${token}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     console.log("📩 Email sent:", response.data);
//   } catch (err) {
//     console.error("❌ Error sending email:", err.response?.data || err.message);
//   }
// };

// app.get('/send-email', async (req, res) => {
//   try {
//     await sendZohoMail();
//     res.status(200).send('Email sent successfully!');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error sending email');
//   }
// });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
} );
