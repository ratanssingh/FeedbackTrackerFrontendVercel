import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import './FeedbackForm.css';

const FeedbackForm = ({ onFeedbackAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      await axios.post('https://feedback-tracker-backend-vercel.vercel.app/feedback', {
        name,
        email,
        message,
      });

      onFeedbackAdded(response.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting feedback:', error.response?.data || error.message);
      alert('Failed to submit feedback.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2 className="form-title">FEEDBACK FORM</h2>
      <p className="form-subtitle">
        Your Feedback is very crucial for us..........
      </p>
      <div className="input-group">
        <FaUser className="input-icon" />
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-group">
        <FaEnvelope className="input-icon" />
        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-group">
        <FaComment className="input-icon" />
        <textarea placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default FeedbackForm;