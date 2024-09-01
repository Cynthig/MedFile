import React, { useState } from 'react';
import { FaPaperPlane, FaUserMd } from 'react-icons/fa';
import '../index.css';

const Chat = () => {
  const [chats, setChats] = useState([
    {
      doctor: 'Dr. Smith',
      messages: [
        { sender: 'admin', text: 'Patient John Doe is coming to see you at 10:00 AM.', timestamp: '09:45 AM' },
        { sender: 'doctor', text: 'Thanks for the heads-up!', timestamp: '09:46 AM' }
      ]
    },
    {
      doctor: 'Dr. Johnson',
      messages: [
        { sender: 'admin', text: 'Patient Jane Doe is coming to see you at 10:30 AM.', timestamp: '10:00 AM' },
        { sender: 'doctor', text: 'Got it!', timestamp: '10:01 AM' }
      ]
    },
    
  ]);

  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const updatedChats = [...chats];
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    updatedChats[currentChatIndex].messages.push({ sender: 'admin', text: newMessage, timestamp });
    setChats(updatedChats);
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <h3>Conversations</h3>
        <ul>
          {chats.map((chat, index) => (
            <li
              key={index}
              className={index === currentChatIndex ? 'active' : ''}
              onClick={() => setCurrentChatIndex(index)}
            >
              <FaUserMd className="doctor-icon" />
              {chat.doctor}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-content">
        <h3>Chat with {chats[currentChatIndex].doctor}</h3>
        <div className="chat-messages">
          {chats[currentChatIndex].messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === 'admin' ? 'admin-message' : 'doctor-message'}`}
            >
              <p>{msg.text}</p>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>
            <FaPaperPlane />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
