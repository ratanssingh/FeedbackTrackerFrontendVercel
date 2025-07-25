import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import FeedbackList from './FeedbackList';
import FeedbackModal from './FeedbackModal';
import Toast from './Toast'; 

const API_URL = 'https://feedbacktrackerbackendvercel.onrender.com';

function FeedbackPage() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`${API_URL}/feedback`);
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };
    fetchFeedback();
  }, []);

  const handleFeedbackAdded = (newFeedback) => {
    setFeedbackData([newFeedback, ...feedbackData]);
    setIsModalOpen(false);

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleVote = (updatedFeedback) => {
    setFeedbackData(feedbackData.map(item => (item.id === updatedFeedback.id ? updatedFeedback : item)));
  };

  const handleDelete = (deletedId) => {
    setFeedbackData(feedbackData.filter(item => item.id !== deletedId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="back-button">
          <FaArrowLeft />
          <span>Back</span>
        </Link>
        <h1>Feedback Tracker</h1>
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
          Give Feedback
        </button>
      </header>

      <main>
        <FeedbackList feedbackData={feedbackData} onVote={handleVote} onDelete={handleDelete} />
      </main>

      <FeedbackModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onFeedbackAdded={handleFeedbackAdded}
      />
      {showToast && <Toast message="Feedback submitted! ✅" show={true} />}
    </div>
  );
}

export default FeedbackPage;