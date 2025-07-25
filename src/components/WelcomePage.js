import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaBullhorn, FaVoteYea, FaTrash } from 'react-icons/fa';
import './WelcomePage.css'; 

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to Feedback Tracker</h1>
        <p className="welcome-subtitle">
          The simple and effective way to collect, track, and manage user feedback.
        </p>
        
        <div className="features-grid">
          <div className="feature-item">
            <FaBullhorn size={30} />
            <h3>Submit Feedback</h3>
            <p>Easily share your thoughts and suggestions.</p>
          </div>
          <div className="feature-item">
            <FaVoteYea size={30} />
            <h3>Vote & Prioritize</h3>
            <p>Upvote ideas to highlight what's most important.</p>
          </div>
          <div className="feature-item">
            <FaTrash size={30} />
            <h3>Manage Easily</h3>
            <p>Keep your feedback board clean and relevant.</p>
          </div>
        </div>

        <Link to="/feedback" className="cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;