import React from "react";
import { Link } from "react-router-dom";
import news1 from "../assets/images/resource/news1-1.jpg";
import news2 from "../assets/images/resource/news1-2.jpg";
import news3 from "../assets/images/resource/news1-3.jpg";

const newsData = [
  {
    id: 1,
    title: "Blending Tradition With Modern Architecture",
    text: "Understand how modern design come together create timeless architectural experiences.",
    image: news1,
  },
  {
    id: 2,
    title: "Modern Interior Design Trends 2026",
    text: "Explore the latest interior innovations blending comfort and modern living styles.",
    image: news2,
  },
  {
    id: 3,
    title: "Designing Spaces That Inspire Productivity",
    text: "Learn how architecture and interior design impact workplace efficiency and creativity.",
    image: news3,
  },
];

const NewsSection = () => {
  return (
    <section className="news-section-four">
      <div className="auto-container">
        <div className="row g-24">
          {newsData.map((item) => (
            <div className="news-block-four col-lg-4 col-md-6" key={item.id}>
              <div className="inner-block">
                <div className="image-box">
                  <div className="inner-box">
                    <figure className="image">
                      <Link href="/news-details">
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                      </Link>
                    </figure>
                  </div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <h4 className="title">
                      <Link href="/news-details">{item.title}</Link>
                    </h4>
                    <div className="text">{item.text}</div>
                  </div>
                  <Link className="read-more" href="/news-details">
                    Read More
                    <i className="icon fa fa-solid fa-arrow-right"></i>
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

export default NewsSection;