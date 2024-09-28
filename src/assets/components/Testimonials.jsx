import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Testimonials.css';

function Testimonials() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    { name: "Charlie |(LOGO)| |(Small Business Owner)| ", text: "The best business relationships I have had involved: Enthusiasm for what I was working on, shared hobbies between employees, and the employer trusting in my ability to learn." },
    { text: "I never would have discovered what my dream job was, until I tried something new", name: "Norie |(LOGO)| |(University Swim Coach)|" },
    { text: "If you and your employer are not compatible, you're bound to go nowhere—compatibility truly does matter.", name: "Adel |(LOGO)| |(Project Manager)|" },
    { text: "I want to work for a company that shares my values. If I’m not, it can be extremely painful to walk into work.", name: "Michael |(LOGO)| |(Chemical Engineer)|" },
    { text: "When everyone gets along and is committed to the cause, something good will happen. People need to be empowered to learn along the way.", name: "Arbert |(LOGO)| |(Student Web Developer)|" },
    { text: "After a job rejection, It feels awful to not receive an ounce of feedback when I match, bullet for bullet, the job requirements listed on the job posting.", name: "Michael |(LOGO)| |(Chemical Engineer)|" },
    
  ];

  // Group testimonials based on screen size
  const groupedTestimonials = isMobile 
    ? testimonials.reduce((acc, _, i, arr) => {
        if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
        return acc;
      }, [])
    : testimonials.reduce((acc, _, i) => {
        if (i % 3 === 0) acc.push(testimonials.slice(i, i + 3));
        return acc;
      }, []);
  
  let logoIndex = 0; // Keep track of which logo to use next
  const renderName = (name, index) => {
    if (!name) return null;

    // Array of images to alternate
    const logoImages = [
      "/Images/clothes.png",
      "/Images/swim.png",
      "/Images/productManager.png",
      "/Images/chemistry.png",
      "/Images/computer.png",
      "/Images/chemistry.png",
      
    ];

    return name.split('|').map((part, idx) => {
      const trimmedPart = part.trim();
    
      if (trimmedPart === '(LOGO)' && logoIndex < logoImages.length) {
        const logoToUse = logoImages[logoIndex];
        logoIndex++; // Move to the next logo for future entries
        return (
          <React.Fragment key={idx}>
              <img src={logoToUse} alt="Logo" />
            <br />
          </React.Fragment>
        );
      }

      if (["(Small Business Owner)", "(Consultant - Searching for a Job)", "(Motivated Startup Founder)", "(Previously Frustrated Job Searcher)", "(Chemical Engineer)", "(Project Manager)", "(University Swim Coach)", "(Student Web Developer)"].includes(trimmedPart)) {
        return (
          <div key={idx} className="bottom-border" style={{ fontSize: '12px', marginBottom: '10px' }}>
            {trimmedPart}
            <br />
          </div>
        );
      }
      return (
        <div key={idx}>
          {trimmedPart}
          <br />
        </div>
      );
    });
  };

  return (
    <div className="testimonials-container d-flex justify-content-center align-items-center">
      <div className="testimonials mt-5">
        <h2 className="text-center mb-3 testimonial-word"><span className='bold-text'>Here's why we're needed</span></h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {groupedTestimonials.map((group, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="row justify-content-center">
                  {isMobile ? (
                    <div className="col-12">
                      <div className="testimonial-cardS big-card p-4 text-black bg-white">
                        {group.map((testimonial, idx) => (
                          <div key={idx} className="mb-3">
                            {renderName(testimonial.name, idx)}
                            <p className="testimonial-text mb-2">"{testimonial.text}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    group.map((testimonial, idx) => (
                      <div key={idx} className="col-md-4">
                        <div className="testimonial-cardS p-4 text-black bg-white">
                          {renderName(testimonial.name, idx)}
                          <p className="testimonial-text1 mb-2">"{testimonial.text}"</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
