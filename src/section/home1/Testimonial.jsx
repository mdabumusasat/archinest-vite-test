import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgImage from "../../assets/images/background/testimonial1-1.jpg";
import user1 from "../../assets/images/resource/testi1-1.jpg";
import user2 from "../../assets/images/resource/testi1-2.jpg";
import quoteIcon from "../../assets/images/icons/quote-icon1.png";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    image: user1,
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    image: user2,
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    image: user1,
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    role: "Dog Trainer",
    image: user2,
    text: "I am incredibly impressed with their process and dedication. They took time to understand my lifestyle, presented thoughtful ideas, and executed everything with precision.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section pt-0 pb-0">
      <div className="auto-container">
        <div className="inner-container">
          <figure className="bg-image">
            <img src={bgImage} alt="background" />
          </figure>
          <div className="row">
            <div className="col-xl-5">
              <div className="content-box">
                <div className="sec-title-style-three">
                  <h6 className="sub-title">// Client’s Feedback //</h6>
                  <h2 className="title text-reveal-anim">
                    Client Feedback That Fuels Our Design Journey
                  </h2>
                  <div className="text">
                    Our skilled architects and designers craft innovative spaces
                    with creativity, passion, and precision.
                  </div>
                </div>
                <Link to="/page-project-details" className="theme-btn btn-style-one">
                  <span className="btn-title">View All Testimonials</span>
                  <i className="icon fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-9">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".blog-slider-next",
                  prevEl: ".blog-slider-prev",
                }}
                pagination={{
                  el: ".blog-slider-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 2 },
                }}
                className="testimonial-slider-h1">
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="testimonial-block">
                      <div className="inner-box">
                        <div className="review">
                          <div className="rating">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <i key={i} className="icon fa-solid fa-star"></i>
                            ))}
                          </div>
                        </div>
                        <div className="quote-icon">
                          <img src={quoteIcon} alt="quote" />
                        </div>
                        <div className="text">{item.text}</div>
                        <div className="bottom-box">
                          <div className="info-box">
                            <div className="user-thumb">
                              <img src={item.image} alt={item.name} />
                            </div>
                            <div className="user-info">
                              <div className="name">{item.name}</div>
                              <span className="designation">
                                {item.role}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="slider-info">
                <button className="blog-slider-prev">
                  <i className="fa-light fa-arrow-left"></i>
                </button>
                <div className="blog-slider-pagination"></div>
                <button className="blog-slider-next">
                  <i className="fa-light fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}