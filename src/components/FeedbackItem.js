import React from 'react';
import axios from 'axios';
import './FeedbackItem.css';

const FeedbackItem = ({ feedback, onVote, onDelete }) => {
  const handleVote = async (action) => {
    try {
      const response = await axios.put(`http://localhost:3001/feedback/${feedback.id}/vote`, { action });
      onVote(response.data);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/feedback/${feedback.id}`);
      onDelete(feedback.id);
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <div className="feedback-item">
      <h4>{feedback.name}</h4>
      <p>{feedback.message}</p>
      <div className="feedback-actions">
        <button onClick={() => handleVote('upvote')}>Upvote ({feedback.votes})</button>
        <button onClick={() => handleVote('downvote')}>Downvote</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default FeedbackItem;