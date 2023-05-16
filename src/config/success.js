import React from 'react';
import successImage from '../Images/book.png';
import './success.css';

const SuccessPage = () => {
  return (
    <div className="success-container">
      <h1 className="success-title">Success!</h1>
      <p className="success-message">Your form has been submitted successfully.</p>
      <div className="success-image-container">
        <img className="success-image" src={successImage} alt="Success" />
      </div>
      <p className="thank-you-message">Thank you for your submission.</p>
    </div>
  );
};

export default SuccessPage;