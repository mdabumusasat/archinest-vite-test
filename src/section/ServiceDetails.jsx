import { Link } from "react-router-dom";
import React, { useState }  from "react";
import ServiceImg1 from "../assets/images/resource/service-details.jpg";
import ServiceImg2 from "../assets/images/resource/service-d1.jpg";
import ServiceImg3 from "../assets/images/resource/service-d2.jpg";
import ServiceImg4 from "../assets/images/icons/faq-h2-1.svg";

export default function ServicesDetails() {
   const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What types of architecture and design services do you offer?",
      answer:
        "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
    },
    {
      question: "Do you provide both residential and commercial design solutions?",
      answer:
        "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
    },
    {
      question: "Can you work with my existing contractor or builder?",
      answer:
        "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
    },
    {
      question: "Do you handle construction as well as design?",
      answer:
        "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="services-details pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    {[
                      "Web Development",
                      "UI/UX Design",
                      "Digital Marketing",
                      "Product Design",
                      "Branding & Illustration",
                      "Mobile Solutions",
                    ].map((item, i) => (
                      <li key={i} className={i === 1 ? "current" : ""}>
                        <Link to="#">
                          <i className="fas fa-angle-right"></i>
                          <span>{item}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-details-help">
                  <h3 className="help-title">
                    Contact with <br /> us for any <br /> advice
                  </h3>
                  <div className="help-icon">
                    <i className="fa-regular fa-phone"></i>
                  </div>
                  <div className="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <Link to="#">+892 (123) 112 - 9999</Link>
                  </div>
                </div>
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <div className="service-sidebar-single-btn">
                    <Link to="#" className="theme-btn d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span> download pdf file
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <img src={ServiceImg1} alt="" />
              <h3 className="mt-4">Service Overview</h3>
              <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit </p>
              <div className="content mt-40">
                <h3>Service Center</h3>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <blockquote className="blockquote-one">
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur
                </blockquote>
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <img
                      className="mb-3"
                      src={ServiceImg2}
                      alt=""/>
                    <p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="mb-3"
                      src={ServiceImg3}
                      alt=""/>
                    <p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
                  </div>
                </div>
              </div>
              <div className="mt-25">
                <h3>Frequently Asked Question</h3>
                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="faq-section-home-two pt-0 pb-0">
                  <ul className="accordion-box">
                    {faqs.map((faq, index) => (
                      <li
                        key={index}
                        className={`accordion block ${
                          activeIndex === index ? "active-block" : ""
                        }`}>
                        <div
                          className={`acc-btn ${
                            activeIndex === index ? "active" : ""
                          }`}
                          onClick={() => toggleAccordion(index)}
                          style={{ cursor: "pointer" }}>
                          {faq.question}
                          <div className="icon">
                            <img src={ServiceImg4} alt="" />
                          </div>
                        </div>
                        {activeIndex === index && (
                          <div className="acc-content current">
                            <div className="content">
                              <div className="text">{faq.answer}</div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}