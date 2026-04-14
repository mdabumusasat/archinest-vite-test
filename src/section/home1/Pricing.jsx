import React from "react";
import { Link } from "react-router-dom";
import checkIcon from "../../assets/images/icons/icon1.png";

export default function PricingSection() {
  return (
    <section className="pricing-section pb-0">
      <div className="auto-container">
        <div className="sec-title-style-three text-center">
          <h6 className="sub-title">// Pricing Plan //</h6>
          <h2 className="title text-reveal-anim">
            Flexible Pricing Plans For Every <br /> Dream Space
          </h2>
          <div className="text">
            Choose the perfect package tailored to your style, budget, & <br />
            project requirements effortlessly.
          </div>
        </div>
        <div className="row g-24">
          <div className="pricing-block col-md-6 col-xl-4">
            <div className="inner-block">
              <div className="content-column">
                <h4 className="pricing-title">Basic Plan</h4>
                <div className="pricing-amount">
                  $25 <span>/ per hours</span>
                </div>
                <div className="text">
                  Affordable design solutions for small spaces, offering essential dream project.
                </div>
                <ul className="list-style">
                  <li className="list-item"><img src={checkIcon} alt="" /> Price Transparency</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Save Design Costs by more than 20%</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> 24/7 Consulting Service</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Unlimited Design Changes</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Worked by the Architectural Experts</li>
                </ul>
                <Link to="/page-contact" className="theme-btn btn-style-three">
                  <span className="btn-title">Get Started Now</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-block col-md-6 col-xl-4">
            <div className="inner-block active">
              <div className="content-column">
                <h4 className="pricing-title">Standard Plan</h4>
                <div className="pricing-amount">
                  $50 <span>/ per hours</span>
                </div>
                <div className="text">
                  Comprehensive design package detailed planning, 3D visuals, & expert
                </div>
                <ul className="list-style">
                  <li className="list-item"><img src={checkIcon} alt="" /> Price Transparency</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Save Design Costs by more than 20%</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> 24/7 Consulting Service</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Comprehensive package for all stages</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Unlimited Design Changes</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Worked by the Architectural Experts</li>
                </ul>
                <Link to="/page-contact" className="theme-btn btn-style-three">
                  <span className="btn-title">Get Started Now</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-block col-md-6 col-xl-4">
            <div className="inner-block">
              <div className="content-column">
                <h4 className="pricing-title">Premium Plan</h4>
                <div className="pricing-amount">
                  $75 <span>/ per hours</span>
                </div>
                <div className="text">
                  Exclusive end-to-end service, from concept designs tailored your lifestyle.
                </div>
                <ul className="list-style">
                  <li className="list-item"><img src={checkIcon} alt="" /> Price Transparency</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Save Design Costs by more than 20%</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> 24/7 Consulting Service</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Unlimited Design Changes</li>
                  <li className="list-item"><img src={checkIcon} alt="" /> Worked by the Architectural Experts</li>
                </ul>
                <Link to="/page-contact" className="theme-btn btn-style-three">
                  <span className="btn-title">Get Started Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}