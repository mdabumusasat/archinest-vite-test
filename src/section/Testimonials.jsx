import React from "react";
import { Link } from "react-router-dom";
import user1 from "../assets/images/resource/testi1-1.jpg";
import user2 from "../assets/images/resource/testi1-2.jpg";
import quoteIcon from "../assets/images/icons/quote-icon1.png";
import socialIcon from "../assets/images/icons/s-icon1.png";

const testimonials = [
  {
    id: 1,
    image: user1,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
  {
    id: 2,
    image: user2,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
  {
    id: 3,
    image: user1,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
  {
    id: 4,
    image: user2,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
  {
    id: 5,
    image: user1,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
  {
    id: 6,
    image: user2,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section pt-100 pb-80">
      <div className="container">
        <div className="row">
          {testimonials.map((item) => (
            <div key={item.id} className="col-xl-4 col-md-6 mb-20">
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="review">
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i key={i} className="icon fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <div className="quote-icon">
                    <img src={quoteIcon} alt="quote" />
                  </div>
                  <div className="text">{item.text}</div>
                  <div className="bottom-box">
                    <div className="info-box">
                      <div className="user-thumb">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="user-info">
                        <div className="name">{item.name}</div>
                        <span className="designation">{item.role}</span>
                      </div>
                    </div>
                    <div className="social-box">
                      <Link className="icon" to="#">
                        <img src={socialIcon} alt="social" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}