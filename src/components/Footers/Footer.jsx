import React from "react";
import { Link } from "react-router-dom";
import footerIcon1 from "../../assets/images/icons/footer-h1-1.png";
import footerIcon2 from "../../assets/images/icons/footer-h1-2.png";
import footerIcon3 from "../../assets/images/icons/footer-h2-3.png";
import footerImage from "../../assets/images/logo-2.png";

const Footer = () => {
  return (
<footer className="main-footer footer-style-one">
      <div className="anim-icon-one">
        <img src={footerIcon1} alt="" />
      </div>
      <div className="anim-icon-two">
        <img src={footerIcon2} alt="" />
      </div>
      <div className="anim-icon-three">
        <img src={footerIcon3} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-logo">
              <div className="logo">
                <Link to="/">
                  <img src={footerImage} alt="" />
                </Link>
              </div>
            </div>
            <div className="widgets-section">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 footer-column">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">Useful Links</h4>
                    <ul className="user-links">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/page-about">About Us</Link></li>
                      <li><Link to="/page-services">Our Service</Link></li>
                      <li><Link to="/page-pricing">Pricing Plan</Link></li>
                      <li><Link to="/page-team">Our Team</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-column">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">Company Pages</h4>
                    <ul className="user-links">
                      <li><Link to="/page-project">Our Projects</Link></li>
                      <li><Link to="#">Our Articles</Link></li>
                      <li><Link to="/page-faq">Our Faq</Link></li>
                      <li><Link to="/page-contact">Contact Us</Link></li>
                      <li><Link to="/page-404">404 Not Found</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 footer-column">
                  <div className="footer-widget info-widget mb-0">
                    <h4 className="widget-title">Office Address</h4>
                    <div className="user-info">
                      <div className="info-box">
                        <span>24/7 Call Us</span>
                        <Link className="info-link" to="#">
                          +(205) 555-0100
                        </Link>
                      </div>
                      <div className="info-box">
                        <span>Location</span>
                        <div className="info-link">
                          New York City, New York County, New York
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="big-title">ArchiNest</div>
            <div className="footer-bottom">
              <div className="copyright">
                © 2026 <Link to="#">Thememascot</Link> - Archinest. All rights reserved.
              </div>
              <ul className="footer-bottom_nav">
                <li><Link to="#">Terms</Link></li>
                <li>&</li>
                <li><Link to="#">Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-contact">
              <div className="inner-contact">
                <h2 className="contact-title">
                  Have A <br />Project In Mind? <br />Let’s Talk.
                </h2>
                <div className="widget-outer">
                  <Link to="/page-contact" className="contact-buton">
                    <i className="icon fa-light fa-arrow-right"></i>
                    <span>Contact Us</span>
                  </Link>
                  <div className="footer-widget social-widget">
                    <h4 className="widget-title">Follow Us</h4>
                    <ul className="social-link">
                      <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                      <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                      <li><Link to="#"><i className="fa-regular fa-x"></i></Link></li>
                      <li><Link to="#"><i className="fa-solid fa-link-slash"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
