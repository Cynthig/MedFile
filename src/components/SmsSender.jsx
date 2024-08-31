import React, { useState } from 'react';
import axios from 'axios';

const SmsSender = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSendSms = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-sms', {
        phoneNumber,
        message,
      });

      if (response.data.success) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message: ' + response.data.error);
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Send SMS</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendSms}>Send SMS</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SmsSender;
