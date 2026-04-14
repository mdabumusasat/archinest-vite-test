import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CounterUp from "../../lib/CounterUp";
import BannerImage1 from "../../assets/images/icons/banner-h3-icon1.png";
import BannerImage2 from "../../assets/images/background/banner-h3-1.jpg";
import BannerImage3 from "../../assets/images/background/banner-h3-2.jpg";
import BannerImage4 from "../../assets/images/background/banner-h3-3.jpg";

const counters = [
  {
    value: 475,
  },
];

const slides = [
  {
    id: 1,
    bg: BannerImage2,
  },
  {
    id: 2,
    bg: BannerImage3,
  },
  {
    id: 3,
    bg: BannerImage4,
  },
];

export default function BannerSectionThree() {
  return (
    <section className="banner-section-three">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".array-next",
          prevEl: ".array-prev",
        }}
        className="banner-active">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg bg-image">
              <img src={slide.bg} alt="banner" />
            </div>
            <div className="auto-container">
              <div className="banner-slider">
                <div className="outer-box">
                  <div className="banner-slide">
                    <div className="content-box">
                      <h1 className="title text-reveal-anim">
                        Crafting Sustainable & Iconic Structures
                      </h1>
                      <div className="bottom-box">
                        <div className="banner-icon">
                          <img
                            src={BannerImage1}
                            alt="icon"
                          />
                        </div>
                        <div className="content">
                          <div className="text">
                            We specialize in designing sustainable, iconic
                            structures that harmonize functionality,
                            creativity, and timeless architectural excellence.
                          </div>
                          <Link
                            to="/page-service-details"
                            className="theme-btn btn-style-two">
                            <span className="btn-title">Our Services</span>
                            <i className="icon fa-light fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="banner-count-box">
                    <div className="inner-box">
                      <div className="count-box">
                        <span className="count-text">
                          <CounterUp end={counters[0].value} />
                        </span>
                        +
                      </div>
                      <div className="text">
                        Successful Projects and Counting
                      </div>
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
        <button className="array-prev mr-10">
          <i className="fa-regular fa-arrow-left"></i>
        </button>
        <button className="array-next">
          <i className="fa-regular fa-arrow-right"></i>
        </button>
      </div>

      {/* Social Links */}
      <ul className="banner-social-link">
        <li>
          <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
        </li>
        <li>
          <Link to="#"><i className="fa-regular fa-x"></i></Link>
        </li>
        <li>
          <Link to="#"><i className="fa-solid fa-paper-plane"></i></Link>
        </li>
        <li>
          <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
        </li>
      </ul>
    </section>
  );
}