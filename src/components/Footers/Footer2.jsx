import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/icons/footer-h2-1.png";
import icon2 from "../../assets/images/icons/footer-h2-2.png";
import icon3 from "../../assets/images/icons/footer-h2-3.png";
import logo from "../../assets/images/logo-2.png";
import smallIcon from "../../assets/images/icons/footer-h2-1.svg";
import callIcon from "../../assets/images/icons/footerh2-2.png";
import locationIcon from "../../assets/images/icons/footerh2-3.png";

const Footer = () => {
  return (
    <footer className="main-footer footer-style-home-two">
      <div className="widgets-section">
        <div className="anim-icon-one">
          <img src={icon1} alt="" />
        </div>
        <div className="anim-icon-two">
          <img src={icon2} alt="" />
        </div>
        <div className="anim-icon-three">
          <img src={icon3} alt="" />
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="upper-box col-lg-12">
              <div className="footer-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="text">
                Since 1993, our studio has been transforming spaces with exceptional craftsmanship, innovative interiors, and timeless design excellence.
              </div>
              <ul className="social-link">
                <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                <li><Link to="#"><i className="fa-regular fa-x"></i></Link></li>
                <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
              </ul>
            </div>
            <div className="footer-column col-xl-5">
              <div className="about-widget">
                <h2 className="footer-title">
                  Subscribe for Architecture & Interior Updates
                </h2>
                <div className="footer-text">
                  Stay informed with the latest architecture trends, design tips, and creative inspirations.
                </div>
                <div className="subscribe-form-one">
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Your Email..."/>
                      <div className="icon">
                        <Link to="#">
                          <i className="fa-light fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-column col-xl-2 offset-xl-1 col-md-4">
              <div className="footer-widget two">
                <h4 className="widget-title">Useful Links</h4>
                <ul className="user-links">
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">Home</Link>
                  </li>
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">About Us</Link>
                  </li>
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">Our Service</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-2 col-md-4">
              <div className="footer-widget three">
                <h4 className="widget-title">Company Pages</h4>
                <ul className="user-links">
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">Our Projects</Link>
                  </li>
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">Our Articles</Link>
                  </li>
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-2 col-md-4">
              <div className="footer-widget four">
                <h4 className="widget-title">Company Pages</h4>
                <ul className="user-links">
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">Our Projects</Link>
                  </li>
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">Our Articles</Link>
                  </li>
                  <li>
                    <span className="icon">
                      <img src={smallIcon} alt="" />
                    </span>
                    <Link to="/page-project-details">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-6 offset-xl-6">
              <div className="row clearfix">
                <div className="info-box col-md-5">
                  <div className="icon">
                    <img src={callIcon} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">24/7 Call Us</div>
                    <h4 className="title">
                      <Link to="#">+(205) 555-0100</Link>
                    </h4>
                  </div>
                </div>
                <div className="info-box col-md-7">
                  <div className="icon">
                    <img src={locationIcon} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">Company Location</div>
                    <h4 className="title two">
                      <Link to="/page-contact">
                        New York City, New York County
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright text-center text-md-start">
              © 2026 <Link to="#">Thememascot</Link> - Archinest. All rights reserved.
            </div>
            <ul className="footer-bottom_nav">
              <li><Link to="#">Terms</Link></li>
              <li>&amp;</li>
              <li><Link to="#">Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;