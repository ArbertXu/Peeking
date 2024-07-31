import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      text: "This product changed my life!",
      name: "John Doe"
    },
    {
      text: "Amazing service and support.",
      name: "Jane Smith"
    },
    {
      text: "Highly recommend to everyone.",
      name: "Sam Wilson"
    }
    ,
    {
      text: "Highly recommend to everyone.",
      name: "Sam Wilson"
    }
    ,
    {
      text: "Highly recommend to everyone.",
      name: "Sam Wilson"
    }
    ,
    {
      text: "Highly recommend to everyone.",
      name: "Sam Wilson"
    }
    ,
    {
      text: "Highly recommend to everyone.",
      name: "Sam Wilson"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 20,
    slidesToShow: 0,
    slidesToScroll: 0,
    autoplay: false,
    centerMode: false,
    centerPadding: '0',
    arrows: true,
  };

  return (
    <div className="testimonials">
      <h2>What Our Users Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;