import React from "react";
import { Link } from "react-router-dom";
import workImg from "../../assets/images/resource/work1.png";

const workSteps = [
  {
    id: 1,
    number: "01",
    title: "Concept & Consultation",
    text: "We begin with understanding your vision, lifestyle, & requirements to create a strong design foundation.",
  },
  {
    id: 2,
    number: "02",
    title: "Design & Planning",
    text: "Our experts craft detailed layouts, 3D visuals, and material selections tailored to your project needs.",
  },
  {
    id: 3,
    number: "03",
    title: "Development & Execution",
    text: "We manage construction, coordination, & implementation with precision to bring the designs to life.",
  },
  {
    id: 4,
    number: "04",
    title: "Final Delivery & Handover",
    text: "Your space is completed, polished, and handed over—ready to inspire & elevate your living experience.",
  },
];

const WorkSection = () => {
  return (
    <section className="work-section pt-0 pb-0">
      <div className="large-container">
        <div className="inner-container">
          <div className="sec-title-box">
            <div className="sec-title-style-three">
              <h6 className="sub-title">// Architecture Work Stages //</h6>
              <h2 className="title text-reveal-anim">
                Building Extraordinary Spaces Through <br /> Process & Precision
              </h2>
            </div>
            <div className="sec-right-box">
              <div className="text">
                We follow a structured design process with precision, ensuring
                every project transforms into an extraordinary space.
              </div>
            </div>
          </div>
          <div className="row g-24">
            {workSteps.map((step) => (
              <div
                key={step.id}
                className="work-block col-xxl-3 col-xl-4 col-md-6">
                <div className="inner-block mb-20">
                  <div className="number">{step.number}</div>
                  <h4 className="title">
                    <Link to="/page-project-details">{step.title}</Link>
                  </h4>
                  <div className="text">{step.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="work-text-area">
            <div className="work-text">
              <img src={workImg} alt="work process" />
              Align with Businesses that Choose Quality
            </div>
            <Link to="/page-project-details" className="theme-btn btn-style-one">
              <span className="btn-title">Read More Process</span>
              <i className="icon fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;