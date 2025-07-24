import React from 'react';
import FeedbackForm from './FeedbackForm'; 
import './FeedbackModal.css';

const FeedbackModal = ({ isOpen, onClose, onFeedbackAdded }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <FeedbackForm onFeedbackAdded={onFeedbackAdded} />
      </div>
    </div>
  );
};

export default FeedbackModal;
