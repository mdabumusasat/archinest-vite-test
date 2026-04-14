import React from "react";
import { Link } from "react-router-dom";
import checkIcon from "../../assets/images/icons/icon1.png";
const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$25",
    duration: "/ per hours",
    description:
      "Affordable design solutions for small spaces, offering essential dream project.",
    features: [
      "Price Transparency",
      "Save Design Costs by more than 20%",
      "24/7 Consulting Service",
      "Unlimited Design Changes",
      "Worked by the Architectural Experts",
    ],
    active: false,
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "$50",
    duration: "/ per hours",
    description:
      "Comprehensive design package detailed planning, 3D visuals, & expert",
    features: [
      "Price Transparency",
      "Save Design Costs by more than 20%",
      "24/7 Consulting Service",
      "Comprehensive package for all stages",
      "Unlimited Design Changes",
      "Worked by the Architectural Experts",
    ],
    active: true,
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "$75",
    duration: "/ per hours",
    description:
      "Exclusive end-to-end service, from concept designs tailored your lifestyle.",
    features: [
      "Price Transparency",
      "Save Design Costs by more than 20%",
      "24/7 Consulting Service",
      "Unlimited Design Changes",
      "Worked by the Architectural Experts",
    ],
    active: false,
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="row g-24">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="pricing-block col-lg-6 col-xxl-4 mb-20">
              <div className={`inner-block ${plan.active ? "active" : ""}`}>
                <div className="content-column">
                  <h4 className="pricing-title">{plan.title}</h4>
                  <div className="pricing-amount">
                    {plan.price} <span>{plan.duration}</span>
                  </div>
                  <div className="text">{plan.description}</div>
                  <ul className="list-style">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="list-item">
                        <img src={checkIcon} alt="icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/page-contact" className="theme-btn btn-style-three">
                    <span className="btn-title">Get Started Now</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;