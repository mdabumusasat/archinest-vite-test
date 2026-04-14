import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import AboutImage1 from "../../assets/images/resource/author1.jpg";
import AboutImage2 from "../../assets/images/resource/author2.png";
import AboutVideo1Img1 from "../../assets/images/background/video1-1.jpg";
import AboutImg1 from "../../assets/images/resource/about1-1.jpg";

const AboutSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6">
              <div className="inner-column">
                <div className="sec-title-style-three">
                  <h6 className="sub-title">// About Our Company //</h6>
                  <h2 className="title text-reveal-anim">
                    Passion, Precision & Purpose <br />
                    in Every Design
                  </h2>
                  <div className="text">
                    We combine creativity, detail, and vision to craft exceptional
                    spaces that inspire <br />
                    and elevate everyday living.
                  </div>
                </div>
                <ul className="list-info">
                  {[
                    "Unique, creative to your vision and lifestyle.",
                    "From concept to completion, handled with precision and care.",
                    "Bespoke pieces that enhance your space’s character.",
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="icon">
                        <svg width="20" height="20">
                          <circle cx="10" cy="10" r="9" stroke="#111" fill="none" />
                          <circle cx="10" cy="10" r="4" fill="#111" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="info-block">
                  <div className="info-box">
                    <div className="inner-box">
                      <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="info">
                        <h6>Need Help?</h6>
                        <h4>
                          <Link to="#">(252) 555-0126</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="author-info">
                    <div className="inner-box">
                      <div className="images">
                        <img src={AboutImage1} alt="author" />
                      </div>
                      <div className="info">
                        <img
                          className="image"
                          src={AboutImage2}
                          alt="sign"
                        />
                        <h6>
                          <Link to="/page-about">Founder of Archinest</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="video-box">
                  <div
                    className="inner-box"
                    style={{ backgroundImage: `url(${AboutVideo1Img1})` }}>
                    <button
                      className="play-now"
                      onClick={() => setOpen(true)}
                      style={{ border: "none", background: "none" }} >
                      <i className="icon fa-solid fa-play"></i>
                      <span className="ripple"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-xl-5 col-lg-6 offset-xl-1">
              <div className="inner-column">
                <figure className="image">
                  <img src={AboutImg1} alt="about" />
                </figure>
                <div className="text">
                  We believe great design goes beyond aesthetics — it’s about
                  creating spaces that reflect personality, enhance the test of
                  time.
                </div>
                <Link
                  to="/page-project-details"
                  className="theme-btn btn-style-one">
                  <span className="btn-title">See More About Us</span>
                  <i className="icon fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Video */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Fvae8nxzVz4"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default AboutSection;