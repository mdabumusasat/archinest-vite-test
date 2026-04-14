import React from "react";
import { Link } from "react-router-dom";
import news1 from "../../assets/images/resource/news1-1.jpg";
import news2 from "../../assets/images/resource/news1-2.jpg";
import news3 from "../../assets/images/resource/news1-3.jpg";

const articles = [
  {
    id: 1,
    title: "Sustainable Architecture: Building a Greener Future",
    description:
      "Discover eco-friendly design principles shaping sustainable architectural futures",
    image: news1,
    day: "12",
    month: "August",
  },
  {
    id: 2,
    title: "Sustainable Architecture: Building a Greener Future",
    description:
      "Discover eco-friendly design principles shaping sustainable architectural futures",
    image: news2,
    day: "12",
    month: "August",
  },
  {
    id: 3,
    title: "Sustainable Architecture: Building a Greener Future",
    description:
      "Discover eco-friendly design principles shaping sustainable architectural futures",
    image: news3,
    day: "12",
    month: "August",
  },
];

export default function NewsSection() {
  return (
    <section className="news-section">
      <div className="auto-container">
        <div className="sec-title-style-three text-center">
          <h6 className="sub-title">// Our Latest Articles //</h6>
          <h2 className="title text-reveal-anim">
            Stay Inspired with Our Latest Articles on <br />
            Architecture & Interiors
          </h2>
          <div className="text">
            Explore expert tips, design trends, and inspiring stories to elevate
            and transform your living spaces.
          </div>
        </div>
        <div className="row g-24">
          {articles.map((item) => (
            <div key={item.id} className="news-block col-xl-4 col-lg-6">
              <div className="inner-block">
                <div className="image-box">
                  <div className="inner-box relative">
                    <figure className="image">
                      <Link to="/news-details">
                        <img src={item.image} alt={item.title} />
                        <img src={item.image} alt={item.title} />
                      </Link>
                    </figure>
                    <span className="date">
                      <strong>{item.day}</strong>
                      <span>{item.month}</span>
                    </span>
                  </div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <h4 className="title">
                      <Link to="/news-details">{item.title}</Link>
                    </h4>
                    <div className="text">{item.description}</div>
                    <Link to="/news-details" className="read-more">
                      Read More
                      <i className="icon fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <Link to="/news-grid" className="theme-btn btn-style-one">
            <span className="btn-title">View all Articles</span>
            <span className="icon">
              <i className="fa-light fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}