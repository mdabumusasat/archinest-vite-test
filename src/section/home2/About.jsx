import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../lib/CounterUp";
import img1 from "../../assets/images/resource/feature-h2-1.jpg";
import img2 from "../../assets/images/resource/feature-h2-2.jpg";
import icon5 from "../../assets/images/icons/theme-icon5.png";
import icon6 from "../../assets/images/icons/theme-icon6.png";

const counters = [
  { value: 75 },
  { value: 1.5 },
];

export default function AboutSectionHomeTwo() {
  return (
    <section className="about-section-home-two">
      <div className="auto-container">
        <div className="sec-title-style-two">
          <h6 className="sub-title">// About Our Company //</h6>
          <h2 className="title text-reveal-anim">
            Crafting Architectural Excellence With a Passion For Innovation and
            Timeless Design
          </h2>
        </div>
        <div className="row">
          <div className="image-column col-xl-3 col-md-6 d-none d-xl-block">
            <figure className="image one">
              <img src={img1} alt="Feature" />
            </figure>
          </div>
          <div className="image-column col-xl-4 col-lg-5">
            <figure className="image">
              <img src={img2} alt="Feature" />
            </figure>
          </div>
          <div className="content-column col-xl-5 col-lg-7">
            <div className="inner-column">
              <div className="content">
                <h4 className="title">
                  <Link to="/page-about">Our Mission</Link>
                </h4>
                <div className="text">
                  Our mission is to design spaces that not only serve functional
                  needs but also inspire creativity & connection.
                </div>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link to="/page-about">Our Vision</Link>
                </h4>
                <div className="text">
                  Our vision is to be a leading force in architecture and
                  interior design, shaping the future of modern living.
                </div>
              </div>
              <div className="row gx-2">
                <div className="about-block-home-two col-lg-6 col-md-6 col-sm-6">
                  <div className="inner-block">
                    <div className="title-box">
                      <h4 className="title">
                        <Link to="/page-project-details">Global Reach</Link>
                      </h4>
                      <div className="icon-box">
                        <img src={icon5} alt="icon" />
                      </div>
                    </div>
                    <div className="count-box">
                      <span className="count-text">
                        <CounterUp end={counters[0].value} />
                      </span>+
                    </div>
                    <div className="text">Offices worldwide</div>
                  </div>
                </div>
                <div className="about-block-home-two col-lg-6 col-md-6 col-sm-6">
                  <div className="inner-block">
                    <div className="title-box">
                      <h4 className="title">
                        <Link to="/page-project-details">Local Expertise</Link>
                      </h4>
                      <div className="icon-box">
                        <img src={icon6} alt="icon" />
                      </div>
                    </div>
                    <div className="count-box">
                      <span className="count-text">
                        <CounterUp end={counters[1].value} />
                      </span>k+
                    </div>
                    <div className="text">Our employees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}