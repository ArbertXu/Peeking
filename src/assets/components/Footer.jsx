import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ImageButton from './imageButton';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Left content */}
        

        {/* Right content */}
        
        <div className="right-content">
          <ul className="footer-links">
          <div className="mobile-text">
          <p>Let us get you a better match</p>
         <h2>#GetPeeking</h2>
        </div>
          <li className="image-button"><ImageButton /></li>
          
            <div className="terms-row">
              <li><Link to="/terms-and-conditions">Terms of Use</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </div>
            <li><h2><Link to="/contact">Contact a Founder</Link></h2></li>
            <div className="icon-container">
              <li className="icon">
                <a href="https://www.instagram.com/getpeeking/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                </a>
              </li>
              <li className="icon">
                <a href="https://www.linkedin.com/company/peeking/" target="_blank" rel="noopener noreferrer">
                <img src='Images/linkedin.jpg' className='linkedin'/>
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="left-content">
          <p>&copy; 2024 Peeking LLC, All Rights Reserved.</p>
        </div>
        {/* Mobile-Only Text */}
        
      </div>
    </footer>
  );
}

export default Footer;
