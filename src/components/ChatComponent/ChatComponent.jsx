import React, { useState } from 'react';
import axios from 'axios';
import './ChatComponent.css';

const ChatComponent = () => {
  const [conversations, setConversations] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleConversationSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim() === '') return;

    const newConversation = {
      role: 'user',
      content: currentMessage.trim(),
    };

    setConversations((prevConversations) => [...prevConversations, newConversation]);
    setCurrentMessage('');
  };

  const handleUserMessageSubmit = async (e) => {
    e.preventDefault();
    if (currentMessage.trim() === '') return;

    const userMessage = {
      role: 'user',
      content: currentMessage.trim(),
    };

    const updatedConversations = [...conversations, userMessage];
    setConversations(updatedConversations);
    setCurrentMessage('');

    try {
      const response = await axios.post('/api/chatbot', {
        messages: updatedConversations,
      });

      const botReply = response.data.answer;

      const botMessage = {
        role: 'assistant',
        content: botReply,
      };

      setConversations((prevConversations) => [...prevConversations, botMessage]);
    } catch (error) {
      console.error('Chatbot API error:', error);
    }
  };

  return (
    <div>
    <div className="chatContainer">
    <h1>Goals AI</h1>
      <div className="messageContainer">
        {conversations.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="user-message-input">
        <form onSubmit={handleUserMessageSubmit}>
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type your message"
            className="chatbotInput"
          />
          <button className="chatComponentButton" type="submit">Send</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ChatComponent;