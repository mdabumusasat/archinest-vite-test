import React, { useState } from "react";
import img1 from "../../assets/images/resource/project1-1.jpg";
import img2 from "../../assets/images/resource/features-h2-1.jpg";
import img3 from "../../assets/images/resource/project1-2.jpg";
import img4 from "../../assets/images/resource/project1-3.jpg";

const features = [
  {
    id: 1,
    number: "#01",
    title: "Innovative Design Solutions",
    text: "We combine creativity with functionality to deliver designs that inspire, impress, and last for generations.",
    image: img1,
  },
  {
    id: 2,
    number: "#02",
    title: "Client-Centered Approach",
    text: "Every design reflects your unique needs, ensuring personalized and meaningful architectural experience.",
    image: img2,
  },
  {
    id: 3,
    number: "#03",
    title: "Sustainable Practices",
    text: "Our approach integrates eco-friendly materials and energy-efficient methods for a greener future.",
    image: img3,
  },
  {
    id: 4,
    number: "#04",
    title: "Timeless Aesthetic Appeal",
    text: "Our designs blend innovation with elegance, creating spaces that remain relevant for years.",
    image: img4,
  },
];

export default function FeaturesSectionTwo() {
  const [activeIndex, setActiveIndex] = useState(1);

  const activeImage =
    features.find((f) => f.id === activeIndex)?.image || img1;

  return (
    <section className="features-section-two">
      <div className="auto-container">
        <div className="inner-container position-relative">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-title-style-three mb-55">
                <h6 className="sub-title">// Our Features //</h6>
                <h2 className="title text-reveal-anim">
                  The Features That Turn Vision Into Architectural Reality
                </h2>
              </div>
              <div className="feature-image-box">
                <img
                  src={activeImage}
                  alt="feature"
                  className="main-image"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {features.map((item) => (
                <div
                  key={item.id}
                  className={`feature-block-two ${
                    activeIndex === item.id ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(item.id)}
                  onClick={() => setActiveIndex(item.id)}>
                  <div className="inner-box">
                    <div className="number">{item.number}</div>
                    <div className="content">
                      <h4 className="title">{item.title}</h4>
                      <div className="text">{item.text}</div>
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
}