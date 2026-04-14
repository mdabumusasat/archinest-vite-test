import React from "react";
import { Link } from "react-router-dom";
import NewsImg1 from "../../assets/images/resource/news2-1.jpg";
import NewsImg2 from "../../assets/images/resource/news3-1.jpg";
import NewsImg3 from "../../assets/images/resource/news3-2.jpg";

const mainPost = {
  id: 1,
  title: "Top Interior Design Trends to Transform Your Home in 2026",
  image: NewsImg1,
  description:
    "Explore innovative design ideas, color palettes, and layouts to modernize your living spaces.",
};

const sidePosts = [
  {
    id: 2,
    title: "How Modern Architecture Living Spaces",
    image: NewsImg2,
    description:
      "Learn how contemporary architecture blends functionality, sustainability in city environments.",
  },
  {
    id: 3,
    title: "How Modern Architecture Living Spaces",
    image: NewsImg3,
    description:
      "Learn how contemporary architecture blends functionality, sustainability in city environments.",
  },
];

export default function NewsSectionTwo() {
  return (
    <section className="news-section-two">
      <div className="auto-container">
        <div className="sec-title-box">
            <div className="sec-title-style-three">
                <h6 className="sub-title">// Our Latest Articles //</h6>
                <h2 className="title text-reveal-anim">
                Exploring Timeless Architecture & Modern Innovation
                </h2>
            </div>
            <div className="sec-right-box">
                <div className="text">
                Discover inspiring stories, design trends, innovations shaping
                modern architecture and timeless interiors.
                </div>
                <Link to="/news-grid" className="theme-btn btn-style-one">
                <span className="btn-title">View All Articles</span>
                <span className="icon">
                    <i className="fa-light fa-arrow-right"></i>
                </span>
                </Link>
            </div>
        </div>
        <div className="row g-24">
            <div className="col-xl-6 mb-4 mb-xl-0">
                <div className="news-block-two">
                    <div className="inner-block mb-0">
                        <div className="image-box">
                            <div className="inner-box">
                                <figure className="image">
                                <Link to="/news-details">
                                    <img src={mainPost.image} alt={mainPost.title} />
                                    <img src={mainPost.image} alt={mainPost.title} />
                                </Link>
                                </figure>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="inner-box">
                                <h4 className="title">
                                <Link to="/news-details">{mainPost.title}</Link>
                                </h4>
                                <div className="text">{mainPost.description}</div>
                                <Link to="/news-details" className="read-more">
                                Read More{" "}
                                <i className="icon fa fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="row">
                {sidePosts.map((post, index) => (
                    <div
                    key={post.id}
                    className="col-xl-12 col-lg-6">
                    <div
                        className={`news-block-three ${
                        index === sidePosts.length - 1 ? "mb-0" : ""
                        }`}>
                        <div className="inner-block">
                        <div className="image-box">
                            <div className="inner-box">
                            <figure className="image">
                                <Link to="/news-details">
                                <img src={post.image} alt={post.title} />
                                <img src={post.image} alt={post.title} />
                                </Link>
                            </figure>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="inner-box">
                            <h4 className="title">
                                <Link to="/news-details">
                                {post.title}
                                </Link>
                            </h4>
                            <div className="text">{post.description}</div>
                            <Link to="/news-details" className="read-more">
                                Read More{" "}
                                <i className="icon fa fa-solid fa-arrow-right"></i>
                            </Link>
                            </div>
                        </div>
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