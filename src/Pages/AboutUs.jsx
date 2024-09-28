import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1><span className='bold-text'>Born from Personal Struggles</span></h1>
      <div className='about-us-text'>
      <p>We are three college swimmers, frustrated with the current hiring process from multiple perspectives.</p>
      <p>Tired of the usual mess, we set out to create a platform that feels more personal and straightforward. </p>
      <p>With Peeking, our goal is for you to look in the right direction faster and easier than ever before... </p>
      <p><span className='bold-text'>Creating matches that truly fit.</span></p>
      </div>
      <div className="meet-the-swimmers">
        <section className='meet-swimmers'>
        <h2>Meet the </h2>
        <h1 className='about-us-founders'>Founders</h1>
        </section>
        
        <div className="swimmer-card">
          <div className="swimmer-image-container">
            <img src="Images/Duffy.png" alt="Swimmer 1" className="swimmer-image" />
          </div>
          <div className="info-box">
            <h3>Charlie Duffy</h3>
            <p>CEO</p>
            <a href="https://linkedin.com/in/charles-duffy15/" target="_blank" rel="noopener noreferrer">
              <img src="Images/Linkedin.png" alt="LinkedIn Profile" className="linkedin-icon" />
            </a>
          </div>
        </div>

        <div className="swimmer-card">
          <div className="swimmer-image-container">
            <img src="Images/Will.png" alt="Swimmer 2" className="swimmer-image" />
          </div>
          <div className="info-box">
            <h3>Will Kaminski</h3>
            <p>CTO</p>
            <a href="https://www.linkedin.com/in/will-kaminski/" target="_blank" rel="noopener noreferrer">
              <img src="Images/Linkedin.png" alt="LinkedIn Profile" className="linkedin-icon" />
            </a>
          </div>
        </div>

        <div className="swimmer-card">
          <div className="swimmer-image-container">
            <img src="Images/Jan.png" alt="Swimmer 3" className="swimmer-image" />
          </div>
          <div className="info-box">
            <h3>Jan Springer</h3>
            <p>CFO</p>
            <a href="https://www.linkedin.com/in/jan-springer05/" target="_blank" rel="noopener noreferrer">
              <img src="Images/Linkedin.png" alt="LinkedIn Profile" className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div class="flex-container">
  <div class="text-box1">
    <p>“In April 2024, just after the end of a long swim season, I woke up at 3 AM from a nightmare. Lying there, I realized the stress of not finding the right job was finally getting to me.</p>
    <p>Heading into my senior year of college, I had spent months applying for jobs, but nothing seemed to click. I had the skills, but as someone who didn’t want to fluff my resume to the moon, I couldn’t get the interview, and without that, I couldn’t share who I was as a person.</p>
    <p>Then the thought hit me hard: “What if there was a better way?” The ideas started flowing, so I grabbed my notebook before they could slip away. I spent the next hour, in the middle of the night, letting my hands and intuition take over, sketching out the vision of what I imagined as a better working world.</p>
    <p>While growing other ventures on campus, I struggled to find an employee who was not only capable but excited to bring new ideas and follow through on them. Intelligence didn’t always equal a great fit, and I’d worked with people who had skills on paper but lacked enthusiasm. I knew something had to change.</p>
    <p>The next morning, I shared my idea with my close friends and teammates, Will Kaminski and Jan Springer, who had been swimming by my side all season. We had talked about creating something for a while, and this was our chance. Together, we saw the potential to create a new approach to the hiring process.</p>
    <p>And that’s how Peeking was born. We’ve spent countless hours interviewing real people, both job seekers and employers, to understand what they truly need. We make great relationships, using data from existing relationships.</p>
    <p>Peeking helps you look in the right direction, creating matches that actually fit.”</p>
    <p>-Charlie Duffy</p>
  </div>
</div>

      </div>
    </div>
  );
}

export default AboutUs;
