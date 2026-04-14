import React from "react";
import { Link } from "react-router-dom";
import team1 from "../../assets/images/resource/team1-1.jpg";
import team2 from "../../assets/images/resource/team1-2.jpg";
import team3 from "../../assets/images/resource/team1-3.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Danial Brown",
    role: "Marketing",
    image: team1,
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Marketing",
    image: team2,
  },
  {
    id: 3,
    name: "Russel Haipner",
    role: "Marketing",
    image: team3,
  },
];

export default function TeamSection() {
  return (
  <section className="teams-section-two">
    <div className="auto-container">
      <div className="sec-title-box">
        <div className="sec-title-style-three">
          <h6 className="sub-title">// Our Professionals //</h6>
          <h2 className="title text-reveal-anim">Meet The Designers Who Inspire Change</h2>
        </div>
        <div className="sec-right-box">
          <div className="text">Get to know the visionary designers creating inspiring spaces with innovation and passion.</div>
          <Link to="/page-team" className="theme-btn btn-style-one">
            <span className="btn-title"> View all Member</span>
            <span className="icon">
              <i className="fa-light fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="team-block-two col-lg-4 col-md-6">
          <div className="inner-block">
            <div className="image-box">
              <figure className="image">
                <Link to="/page-team-details"><img src={team1} alt=""/></Link>
              </figure>
              <div className="social-links">
                <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
              </div>
            </div>
            <div className="content-box">
              <div className="info-box">
                <h5 className="name">
                  <Link to="/page-team-details">Kathryn Murphy</Link>
                </h5>
                <div className="designation">Dog Trainer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-block-two col-lg-4 col-md-6">
          <div className="inner-block">
            <div className="image-box">
              <figure className="image">
                <Link to="/page-team-details"><img src={team3} alt=""/></Link>
              </figure>
              <div className="social-links">
                <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
              </div>
            </div>
            <div className="content-box">
              <div className="info-box">
                <h5 className="name">
                  <Link to="/page-team-details">Jenny Wilson</Link>
                </h5>
                <div className="designation">Nursing Assistant</div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-block-two col-lg-4 col-md-6">
          <div className="inner-block">
            <div className="image-box">
              <figure className="image">
                <Link to="/page-team-details"><img src={team2} alt=""/></Link>
              </figure>
              <div className="social-links">
                <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
              </div>
            </div>
            <div className="content-box">
              <div className="info-box">
                <h5 className="name">
                  <Link to="/page-team-details">Savannah Nguyen</Link>
                </h5>
                <div className="designation">Marketing Coordinator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}