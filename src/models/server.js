const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
  const { phoneNumber, message } = req.body;

  client.messages
    .create({
      body: message,
      from: 'YOUR_TWILIO_PHONE_NUMBER', // Twilio phone number
      to: phoneNumber,
    })
    .then((message) => res.json({ success: true, sid: message.sid }))
    .catch((error) => res.json({ success: false, error: error.message }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
