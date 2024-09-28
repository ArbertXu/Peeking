import React from 'react';

const ImageButton = () => {
  return (
    <a href="https://apps.apple.com/us/app/peeking/id6504951906" target="_blank" rel="noopener noreferrer">
      <img 
        src='\Images\Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg' 
        alt="Button Image" 
        style={{
          width: '28%', 
          height: '100%', 
          cursor: 'pointer', 
          border: 'none', 
          margin: '0 auto'
        }} 
      />
    </a>
  );
};

export default ImageButton;
