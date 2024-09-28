import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './ImageGallery.css';

function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const handleToggle = (nextShow) => {
    setIsOpen(nextShow);
    document.body.style.overflow = nextShow ? 'hidden' : 'auto'; // Disable or enable scrolling based on menu state
  };
  
  const handleScrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional: smooth scrolling
      });
    }
  };

  return (
    <div className="image-gallery">
      <div className="gallery">
        {/* First Gallery Item */}
        <div className="gallery-item">
          <Link to="/" onClick={handleScrollToTop}>
            <img
              src="Images/duckLogo.png"
              alt="Gallery 0"
            />
          </Link>
          <a href="https://apps.apple.com/us/app/peeking/id6504951906">
            <img
              src="Images/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg"
              alt="Gallery 1"
            />
          </a>
          <p className="hide-on-mobile">#GetPeeking</p>
        </div>

        {/* Dropdown Menu Section */}
        <div className="gallery-item1">
          <Dropdown show={isOpen} onToggle={handleToggle}>
            <Dropdown.Toggle as="div" className="dropdown-trigger" onClick={() => handleToggle(!isOpen)}>
              {isOpen ? (
                <span className="close-icon">X</span> // Display "X" when dropdown is open
              ) : (
                <img
                  src="Images/Icon-Set.jpg"
                  alt="Gallery2"
                  className="dropdown-trigger-img"
                />
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu className={isOpen ? 'dropdown-menu show' : 'dropdown-menu hide'}>
              <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
              <Dropdown.Item as={Link} to="/About-Us">About Us</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Tips">Tips For Success</Dropdown.Item>
              <Dropdown.Item as={Link} to="/terms-and-conditions">Terms And Conditions</Dropdown.Item>
              <Dropdown.Item as={Link} to="/privacy-policy">Privacy Policy</Dropdown.Item>
              <Dropdown.Item as={Link} to="/contact">Contact a Founder</Dropdown.Item>
              
              
              
              {/* Add more Dropdown.Item for each page */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
