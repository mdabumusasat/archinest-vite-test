import React from "react";
import { Link } from "react-router-dom";
import ChooseUsBgImage from "../../assets/images/resource/why-choose-us4-1.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      id: "01",
      title: "Expertise You Can Trust",
      text: "Our team brings years of experience, combining technical skill and creative deliver exceptional results.",
    },
    {
      id: "02",
      title: "Attention to Detail",
      text: "From layouts to finishes, meticulously refine every aspect achieve perfection in design execution.",
    },
    {
      id: "03",
      title: "Timely Project Delivery",
      text: "Our efficient workflow ensures projects are completed schedule compromising quality or creativity.",
    },
  ];

  return (
    <section className="why-choose-us-four pt-0">
      <div className="container">
        <div className="inner-container">
          <figure className="image">
            <img
              src={ChooseUsBgImage}
              alt="Why Choose Us"/>
          </figure>
          <div className="row">
            <div className="col-xl-6 offset-xl-6">
              <div className="content-box">
                <div className="sec-title-style-three">
                  <h6 className="sub-title">// Why Choose Us //</h6>
                  <h2 className="title text-reveal-anim">
                    The Difference Between Ordinary & Extraordinary Spaces
                  </h2>
                  <div className="text">
                    We transform everyday spaces into extraordinary environments
                    by combining creativity, precision, and innovative design
                    solutions.
                  </div>
                </div>
                <Link
                  to="/page-contact"
                  className="theme-btn btn-style-one">
                  <span className="btn-title">Contact Us</span>
                  <i className="icon fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xxl-10 offset-xxl-2">
              <div className="row g-0">
                {features.map((item) => (
                  <div
                    key={item.id}
                    className="feature-block col-lg-4 col-md-6">
                    <div className="inner-block">
                      <div className="number">{item.id}</div>
                      <h4 className="title">
                        <Link to="/page-project-details">
                          {item.title}
                        </Link>
                      </h4>
                      <div className="text">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;