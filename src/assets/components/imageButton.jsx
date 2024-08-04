import React from 'react';

const ImageButton = () => {
  return (
    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
      <img 
        src='Images/apple.jpg' 
        alt="Button Image" 
        style={{
          width: '100%', 
          height: '100px', 
          cursor: 'pointer', 
          border: 'none', 
          margin: '0 auto'
        }} 
      />
    </a>
  );
};

export default ImageButton;
