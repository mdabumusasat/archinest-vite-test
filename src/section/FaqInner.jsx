import React, { useState } from 'react';
import FaqImage from "../assets/images/icons/faq-h2-1.svg";

const faqsLeft = [
  {
    question: 'What types of architecture and design services do you offer?',
    answer:
      'Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.',
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
  {
    question: 'Do you provide both residential and commercial design solutions?',
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
  {
    question: 'Can you work with my existing contractor or builder?',
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
  {
    question: 'Do you handle construction as well as design?',
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
];

const faqsRight = [
  {
    question: 'How long does it typically take to complete a project?',
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
  {
    question: 'Do you provide both residential and commercial design solutions?',
    answer:
      'Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.',
  },
  {
    question: 'Can you work with my existing contractor or builder?',
    answer:
      'Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.',
  },
  {
    question: 'Do you handle construction as well as design?',
    answer: 
    'Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.',
  },
  {
    question: 'What types of architecture and design services do you offer?',
    answer: 
    'Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.',
  },
];

function Faqs(){
  const [activeLeft, setActiveLeft] = useState(0);
  const [activeRight, setActiveRight] = useState(1);
  const toggleLeft = (index) => {
    setActiveLeft(activeLeft === index ? -1 : index);
  };
  const toggleRight = (index) => {
    setActiveRight(activeRight === index ? -1 : index);
  };
  return (
    <>
      <section className="faq-section-home-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <ul className="accordion-box">
                {faqsLeft.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block ${activeLeft === index ? 'active-block' : ''}`}>
                    <div
                      className={`acc-btn ${activeLeft === index ? 'active' : ''}`}
                      onClick={() => toggleLeft(index)}>
                      {item.question}
                      <div className="icon"><img src={FaqImage} alt=""/></div>
                    </div>
                    <div className={`acc-content ${activeLeft === index ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="accordion-box">
                {faqsRight.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block ${activeRight === index ? 'active-block' : ''}`}>
                    <div
                      className={`acc-btn ${activeRight === index ? 'active' : ''}`}
                      onClick={() => toggleRight(index)}>
                      {item.question}
                      <div className="icon"><img src={FaqImage} alt=""/></div>
                    </div>
                    <div className={`acc-content ${activeRight === index ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
    );
};

export default Faqs;
