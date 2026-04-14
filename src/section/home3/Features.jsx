import React from "react";
import { Link } from "react-router-dom";
import featureImg from "../../assets/images/resource/features-h3-1.jpg";
import icon from "../../assets/images/icons/theme-icon7.png";

const features = [
  {
    id: 1,
    title: "Consultation & Discovery",
    text: "We begin by understanding your vision, requirements, lifestyle, and project goals to create a tailored design approach.",
    icon,
  },
  {
    id: 2,
    title: "Concept & Design",
    text: "Our team develops creative concepts, sketches, and 3D visualizations to bring your ideas to life.",
    icon,
  },
  {
    id: 3,
    title: "Planning & Development",
    text: "We refine the design, finalize details, and ensure sustainability, functionality, & compliance with architectural standards.",
    icon,
  },
  {
    id: 4,
    title: "Execution & Delivery",
    text: "From construction to finishing touches, we manage the process to deliver exceptional results on time & budget.",
    icon,
  },
];

const FeaturesSectionFive = () => {
  return (
    <section className="features-section-five">
      <div className="container">
        <div className="row">
          <div className="outer-box col-lg-5">
            <figure className="image">
              <img src={featureImg} alt="Design Process" />
            </figure>
            <div className="sec-title-style-three text-left">
              <h6 className="sub-title">// Working Process //</h6>
              <h2 className="title text-reveal-anim">
                Our Step-by-Step Approach To <br />
                Exceptional Design
              </h2>
              <div className="text">
                We follow a structured process ensuring every design is creative, functional, and timeless.
              </div>
              <Link to="/page-contact" className="theme-btn btn-style-two">
                <span className="btn-title">Contact Us</span>
                <span className="icon">
                  <i className="fa-light fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="outer-box">
              {features.map((feature) => (
                <div className="feature-block-five" key={feature.id}>
                  <div className="inner-box">
                    <div className="icon-box">
                      <img className="icon" src={feature.icon} alt="" />
                      <div className="number">{feature.id}</div>
                    </div>
                    <div className="content">
                      <h4 className="title">{feature.title}</h4>
                      <div className="text">{feature.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionFive;