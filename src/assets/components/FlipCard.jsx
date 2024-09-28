import React from 'react';
import './FlipCard.css';

function FlipCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="Images/phone.png" alt="Front" />
          <div className="text-box">
            <h3>For Job Seekers</h3>
          </div>
        </div>
        <div className="flip-card-back">
          <img src="Images/phone2.png" alt="Back" />
          <div className="text-box">
            <h3>For Employers</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
