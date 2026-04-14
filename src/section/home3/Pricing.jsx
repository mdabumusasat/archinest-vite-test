import React, { useState } from "react";
import { Link } from "react-router-dom";
import PricingImage from "../../assets/images/icons/icon1.png";

const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    amount: "$25",
    period: "/ per hours",
    description: "Affordable design solutions small spaces, offering essential dream project.",
    features: [
      "Price Transparency",
      "Save Design Costs by more than 20%",
      "24/7 Consulting Service",
      "Comprehensive package for all stages",
      "Unlimited Design Changes",
      "Worked by the Architectural Experts",
    ],
    link: "/page-pricing",
  },
  {
    id: 2,
    title: "Standard Plan",
    amount: "$45",
    period: "/ per hours",
    description: "Affordable design solutions small spaces, offering essential dream project.",
    features: [
      "Price Transparency",
      "Save Design Costs by more than 20%",
      "24/7 Consulting Service",
      "Comprehensive package for all stages",
      "Unlimited Design Changes",
      "Worked by the Architectural Experts",
    ],
    link: "/page-pricing",
  },
  {
    id: 3,
    title: "Premium Plan",
    amount: "$70",
    period: "/ per hours",
    description: "Affordable design solutions small spaces, offering essential dream project.",
    features: [
      "Price Transparency",
      "Save Design Costs by more than 20%",
      "24/7 Consulting Service",
      "Comprehensive package for all stages",
      "Unlimited Design Changes",
      "Worked by the Architectural Experts",
    ],
    link: "/page-pricing",
  },
];

const PricingSectionTwo = () => {
  const [activePlan, setActivePlan] = useState(2);

  return (
    <section className="pricing-section-two">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-xl-4 scroll-to-fixed-parent">
            <div className="scroll-to-fixed-child">
              <div className="sec-title-style-three white text-left">
                <h6 className="sub-title">// Pricing Plan //</h6>
                <h2 className="title text-reveal-anim">
                  From Concept To <br />
                  Completion – Flexible Plans <br />
                  For Every Client
                </h2>
                <div className="text">
                  Our flexible pricing plans ensure quality architectural solutions tailored to every client’s needs.
                </div>
                <div className="btn-box">
                  <Link to="/page-contact" className="theme-btn btn-style-one">
                    <span className="btn-title"> MONTHLY</span>
                  </Link>
                  <Link to="/page-contact" className="theme-btn btn-style-one">
                    <span className="btn-title"> YEARLY</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-8">
            {pricingPlans.map((plan, idx) => (
              <div className="pricing-block-two" key={plan.id}>
                <div className={`inner-block ${activePlan === plan.id ? "active" : ""}`} onClick={() => setActivePlan(plan.id)}>
                  <div className="content-column">
                    <div className="pricing-title">{plan.title}</div>
                    <div className="pricing-amount">
                      {plan.amount} <span> {plan.period}</span>
                    </div>
                    <div className="text">{plan.description}</div>
                    <Link className="btn-style-four theme-btn" to={plan.link}>
                      <span>Get Started Now </span>
                    </Link>
                  </div>
                  <div className="feature-box">
                    <ul className="list-style">
                      {plan.features.map((feature, i) => (
                        <li className="list-item" key={i}>
                          <img className="icon" src={PricingImage} alt="Image" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSectionTwo;