import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Service3Image1 from "../../assets/images/resource/service2-bg1.jpg";
import Service3Image2 from "../../assets/images/resource/service2-bg2.jpg";
import Service3IconImage1 from "../../assets/images/icons/theme-icon1.png";
import Service3IconImage2 from "../../assets/images/icons/theme-icon2.png";
import Service3IconImage3 from "../../assets/images/icons/theme-icon3.png";
import Service3IconImage4 from "../../assets/images/icons/theme-icon4.png";

const ServiceSectionTwo = () => {
  const [bgImage, setBgImage] = useState(
    Service3Image1
  );
  const defaultBg = Service3Image1;
  const services = [
    {
      title: "Personalized Designs",
      icon: Service3IconImage1,
      bg: Service3Image1,
    },
    {
      title: "Innovative Concepts",
      icon: Service3IconImage2,
      bg: Service3Image2,
    },
    {
      title: "3D Visualization",
      icon: Service3IconImage3,
      bg: Service3Image1,
    },
    {
      title: "Smart Space Planning",
      icon: Service3IconImage4,
      bg: Service3Image2,
    },
    {
      title: "Personalized Designs",
      icon: Service3IconImage1,
      bg: Service3Image1,
    },
    {
      title: "Innovative Concepts",
      icon: Service3IconImage2,
      bg: Service3Image2,
    },
  ];

  return (
    <section className="service-section-two pt-0 pb-0">
      <div
        className="outer-box"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.5s ease",
        }}>
        <div className="service-two-slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}>
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="service-block-two"
                  onMouseEnter={() => setBgImage(item.bg)}
                  onMouseLeave={() => setBgImage(defaultBg)}>
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon-box">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <h4 className="title">
                        <Link to="/page-service-details">
                          {item.title}
                        </Link>
                      </h4>
                    </div>
                    <div className="overlay-content">
                      <div className="icon-box">
                        <img className="icon" src={item.icon} alt={item.title} />
                      </div>
                      <h4 className="title">
                        <Link to="/page-service-details">
                          {item.title}
                        </Link>
                      </h4>
                      <div className="text">
                        Tailored applications built to meet your business scalability.
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="arrow-box">
            <button className="slider-prev mr-10">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button className="slider-next">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionTwo;