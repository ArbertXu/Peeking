import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    { text: "This product changed my life! BLACH BLAH BLAH BLAH BLAH", name: "John Doe" },
    { text: "Amazing service and support. BLAH BLAH BLAH BLAHB LHA", name: "Jane Smith" },
    { text: "Highly recommend to everyone.", name: "Sam Wilson" },
    { text: "I was blah blah blah blah, and Peeking helped me out so much with this this and that. Saved me from filling out 100 applications like I normally do, and I no longer feel like I’m being ghosted!", name: "Jack" },
    { text: "I was blah blah blah blah, and Peeking helped me out so much with this this and that. Saved me from filling out 100 applications like I normally do, and I no longer feel like I’m being ghosted!", name: "Samantha" },
    { text: "WORDS.", name: "Sam Wilson" }
  ];

  // Split testimonials into groups of 2
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  return (
    <div className="testimonials-container d-flex justify-content-center align-items-center">
      <div className="testimonials mt-5">
        <h2 className="text-center mb-5">What Our Users Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {groupedTestimonials.map((group, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="row justify-content-center">
                  {group.map((testimonial, idx) => (
                    <div key={idx} className="col-md-4">
                      <div className="testimonial-card p-4 text-white bg-dark rounded">
                        <p className="mb-2">"{testimonial.text}"</p>
                        <h3>{testimonial.name}</h3>
                      </div>
                    </div>
                  ))}
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