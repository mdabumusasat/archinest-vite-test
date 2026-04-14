import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgImage from "../../assets/images/resource/testi5-bg1.jpg";
import quoteIcon from "../../assets/images/icons/quote-icon3.png";
import userImg from "../../assets/images/resource/testi1-2.jpg";
import socialIcon from "../../assets/images/icons/s-icon1.png";

const testimonials = [
  {
    text: "Working with this architectural team was an absolute pleasure. From the very first meeting, they listened carefully to our ideas and needs, then translated them into designs that perfectly captured our vision. The process was smooth, professional, and breathtakingly beautiful.",
    name: "Darlene Robertson",
    designation: "Web Designer",
    userImage: userImg,
    socialIcon: socialIcon,
    rating: 5,
  },
  {
    text: "Working with this architectural team was an absolute pleasure. From the very first meeting, they listened carefully to our ideas and needs, then translated them into designs that perfectly captured our vision. The process was smooth, professional, and breathtakingly beautiful.",
    name: "John Doe",
    designation: "Architect",
    userImage: userImg,
    socialIcon: socialIcon,
    rating: 5,
  },
  {
    text: "Working with this architectural team was an absolute pleasure. From the very first meeting, they listened carefully to our ideas and needs, then translated them into designs that perfectly captured our vision. The process was smooth, professional, and breathtakingly beautiful.",
    name: "Mary Smith",
    designation: "Interior Designer",
    userImage: userImg,
    socialIcon: socialIcon,
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section-three">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="testi5-image-box">
              <div className="image">
                <img src={bgImage} alt="Testimonial Background" />
                <div className="icon-box">
                  <img className="icon" src={quoteIcon} alt="Quote Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="outer-box">
              <div className="sec-title-style-three text-left">
                <h6 className="sub-title">// Client’s Feedback //</h6>
                <h2 className="title text-reveal-anim">
                  What Our Clients Say About Their <br />
                  Journey With Us
                </h2>
              </div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".blog-slider-next",
                  prevEl: ".blog-slider-prev",
                }}
                pagination={{
                  el: ".blog-slider-pagination",
                  clickable: true,
                }}
                className="testimonial-slider-h3">
                {testimonials.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="testimonial-block-three">
                      <div className="inner-box">
                        <div className="review">
                          <div className="rating">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <i key={i} className="icon fa-solid fa-star"></i>
                            ))}
                          </div>
                        </div>
                        <div className="text">{item.text}</div>
                        <div className="bottom-box">
                          <div className="info-box">
                            <div className="user-thumb">
                              <img
                                className="user"
                                src={item.userImage}
                                alt={item.name}
                              />
                            </div>
                            <div className="user-info">
                              <div className="name">{item.name}</div>
                              <span className="designation">
                                {item.designation}
                              </span>
                            </div>
                          </div>
                          <div className="social-box">
                            <Link className="icon" to="#">
                              <img src={item.socialIcon} alt="Social Icon" />
                            </Link>
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
};

export default TestimonialSection;