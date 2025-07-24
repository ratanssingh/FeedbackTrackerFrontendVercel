import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import FeedbackPage from './components/FeedbackPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;