import React from 'react';
import './ImageGallery.css';

function ImageGallery() {
  const images = [
    'Images/PeekingDuck.jpg',
    'Images/Peeking.jpg',
    'Images/Icon-Set.jpg'
  ];

  return (
    <div className="image-gallery">
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;