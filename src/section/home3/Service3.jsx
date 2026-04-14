import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/resource/experience-3-1.jpg";
import iconShape from "../../assets/images/icons/shape-3-1.png";

const ServiceExperience = () => {
  return (
    <section
      className="service-section-home-3 pt-0 pb-0"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="service-block-home-3 col-xl-4 offset-xl-8 col-md-5 offset-md-7">
            <div className="inner-box">
              <div className="overlay-content">
                <div className="icon-box">
                  <img className="icon" src={iconShape} alt="Icon Shape" />
                </div>
                <h4 className="title">
                  <Link to="/page-service-details">
                    years experience across <br /> interior design
                  </Link>
                </h4>
                <div className="info-box">
                  <div className="number">25+</div>
                  <div className="text">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExperience;