import React from "react";
import { Link } from "react-router-dom";

const ContactInner = () => {
  return (
    <>
      <section className="contact-details">
        <div className="container pt-110 pb-70">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <h2>Feel free to write</h2>
              </div>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={7}
                    placeholder="Write Message"
                  ></textarea>
                </div>
                <div className="mb-5">
                  <button type="submit" className="theme-btn btn-style-one">
                    <span className="btn-title">Send message</span>
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-one ml-10">
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="fa-light fa-phone"></span>
                    </div>
                    <div className="text">
                      <h6 className="mb-1">Have any question?</h6>
                      <Link to="#">+92 (020)-9850</Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fa-light fa-envelope"></span>
                    </div>
                    <div className="text">
                      <h6 className="mb-1">Write email</h6>
                      <Link to="#">
                        needhelp@company.com
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fa-light fa-location-dot"></span>
                    </div>
                    <div className="text">
                      <h6 className="mb-1">Visit anytime</h6>
                      <span>66 Brooklyn Golden Street, New York</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          className="map w-100"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default ContactInner;