import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bgImg from "../../assets/images/background/testimonial-h2-1.jpg";
import quoteIcon from "../../assets/images/icons/quote-icon2.png";
import socialIcon from "../../assets/images/icons/s-icon1.png";
import userImg from "../../assets/images/resource/testi2-1.jpg";

const testimonials = [
  {
    id: 1,
    name: "Darlene Robertson",
    role: "Web Designer",
    image: userImg,
    text: `"We were amazed at how the team translated our ideas into design that felt both modern and timeless. Their attention to detail, creative vision, and ability to combine functionality with beauty transformed our living space."`,
  },
  {
    id: 2,
    name: "Darlene Robertson",
    role: "Web Designer",
    image: userImg,
    text: `"We were amazed at how the team translated our ideas into design that felt both modern and timeless. Their attention to detail, creative vision, and ability to combine functionality with beauty transformed our living space."`,
  },
];

export default function TestimonialSectionTwo() {
  return (
    <section className="testimonial-section-two">
      <div className="outer-box">
        <div className="bg bg-image">
          <img src={bgImg} alt="bg" />
        </div>
        <div className="auto-container">
          <div className="sec-title-box">
            <div className="sec-title-style-three white">
              <h6 className="sub-title">// Client’s Feedback //</h6>
              <h2 className="title text-reveal-anim">
                Client Experiences That Speak Volumes
              </h2>
            </div>
            <div className="sec-right-box">
              <div className="text">
                Our skilled architects and designers craft innovative spaces
                with creativity, passion, and precision.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <div className="suite-slide-wrapper position-relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".slider-next",
                  prevEl: ".slider-prev",
                }}
                className="testimonial-active-home-two">
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="testimonial-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="content-box">
                          <div className="review">
                            <div className="rating">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className="icon fa-solid fa-star"
                                ></i>
                              ))}
                            </div>
                          </div>
                          <div className="quote-icon">
                            <img src={quoteIcon} alt="quote" />
                          </div>
                          <div className="text">{item.text}</div>
                          <div className="bottom-box">
                            <div className="info-box">
                              <div className="user-info">
                                <div className="name">{item.name}</div>
                                <span className="designation">
                                  {item.role}
                                </span>
                              </div>
                            </div>
                            <div className="social-box">
                              <Link href="#">
                                <img src={socialIcon} alt="social" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation */}
              <div className="arrow-box">
                <button className="slider-prev">
                  <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button className="slider-next">
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}