import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import teamImg from "../assets/images/resource/team-details.jpg";

const progressData = [
  { title: "Technology", percent: "90%" },
  { title: "Marketing", percent: "80%" },
  { title: "Business", percent: "75%", noMargin: true },
];

const TeamDetails = () => {
  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const countText = bar.querySelector(".count-text");

            const percentStr = bar.getAttribute("data-percent") || "0%";
            const percent = parseInt(percentStr.replace("%", ""), 10);

            bar.style.width = percent + "%";

            let current = 0;
            const duration = 1000;
            const stepTime = Math.max(Math.floor(duration / percent), 10);

            const timer = setInterval(() => {
              if (current >= percent) {
                clearInterval(timer);
                if (countText) countText.textContent = percent + "%";
              } else {
                current++;
                if (countText) countText.textContent = current + "%";
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="team-details">
        <div className="container pt-120 pb-100">
          <div className="team-details__top pb-70">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-img">
                  <img src={teamImg} alt="team" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-right">
                  <h3 className="team-details__top-name">
                    Aleesha Brown
                  </h3>
                  <p className="team-details__top-title">
                    Managing Director & CEO
                  </p>
                  <p className="team-details__top-text-1">
                    I help my clients stand out and they help me grow.
                  </p>
                  <div className="team-details-contact">
                    <h5>Email Address</h5>
                    <span>needhelp@yourdomain.com</span>
                  </div>
                  <div className="team-details-contact">
                    <h5>Phone Number</h5>
                    <span>+012-3456-789</span>
                  </div>
                  <div className="team-details-contact">
                    <h5>Web Address</h5>
                    <span>www.yourdomain.com</span>
                  </div>
                  <div className="team-details__social mt-3">
                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                    <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-details__bottom pt-100">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__bottom-left">
                  <h4 className="team-details__bottom-left-title">
                    Personal Experience
                  </h4>
                  <p className="team-details__bottom-left-text">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries architecto dolorem ipsum quia
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__bottom-right">
                  <div className="team-details__progress">
                    {progressData.map((item, index) => (
                      <div
                        key={index}
                        className="team-details__progress-single">
                        <h4 className="team-details__progress-title">
                          {item.title}
                        </h4>
                        <div className="bar">
                          <div
                            className={`bar-inner count-bar ${
                              item.noMargin ? "marb-0" : ""
                            }`}
                            data-percent={item.percent}
                            ref={(el) => {
                              progressRefs.current[index] = el;
                            }}
                            style={{ width: "0%" }}>
                            <div className="count-text">0%</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-contact-form">
        <div className="container pt-120 pb-120">
          <div className="text-center mb-5">
            <h2>
              Feel Free to Write Our <br /> Technology Experts
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
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
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Enter Message"
                  />
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="theme-btn btn-style-submit">
                    Send message
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-submit ml-10">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;