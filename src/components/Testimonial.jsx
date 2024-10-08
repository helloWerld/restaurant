import React from "react";
import "./Testimonial.css";

const Testimonial = ({ name, quote, image }) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-quote">"{quote}"</p>
        <h3 className="testimonial-name">- {name}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
