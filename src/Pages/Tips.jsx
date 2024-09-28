import React from 'react';
import './Tips.css';

function TipsPage() {
  const tips = [
    "Set clear goals. Define what success means to you and set clear, achievable goals. Break them down into smaller steps to stay motivated and on track.",
    "Stay organized. Use tools and techniques to stay organized. Prioritize tasks, create to-do lists, and maintain a clutter-free workspace to enhance productivity.",
    "Keep learning. Continuously seek knowledge and opportunities to learn. Read books, attend workshops, and learn from your experiences to keep growing.",
    "Network and connect. Build and maintain relationships with others in your field. Networking can open doors to new opportunities and provide valuable support.",
    "Maintain work-life balance. Ensure you have a healthy balance between work and personal life. Taking time for yourself and your loved ones is essential for long-term success.",
    "Stay positive. Cultivate a positive mindset. Embrace challenges as opportunities for growth and stay focused on your goals even when facing setbacks."
  ];

  return (
    <section className='tips-head'>
      <div className="image-container">
        <a href="https://apps.apple.com/us/app/peeking/id6504951906">
          <img src='/Images/duckLogo.png' alt='Rocket Icon' className='rocket-icon' />
        </a>
      </div>
      <h1><span className='bold-text'>How to Maximize Peeking</span></h1>
      <span className='info-text'>(Available after launch)</span>
    </section>
  );
}

export default TipsPage;
