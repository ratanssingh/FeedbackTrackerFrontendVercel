import React from 'react';
import FeedbackItem from './FeedbackItem'; 
import './FeedbackList.css';

const FeedbackList = ({ feedbackData, onVote, onDelete }) => {
  return (
    <div className="feedback-list">
      {feedbackData.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} onVote={onVote} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;