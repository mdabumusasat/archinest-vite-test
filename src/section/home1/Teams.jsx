import React from "react";
import { Link } from "react-router-dom";
import TeamsImage1 from "../../assets/images/resource/team1-1.jpg";
import TeamsImage2 from "../../assets/images/resource/team1-2.jpg";
import TeamsImage3 from "../../assets/images/resource/team1-3.jpg";
import TeamsImage4 from "../../assets/images/resource/team1-4.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: TeamsImage1,
  },
  {
    id: 2,
    name: "David Michael",
    role: "Marketing Coordinator",
    image: TeamsImage2,
  },
  {
    id: 3,
    name: "David Jonathan Hayes",
    role: "Marketing Coordinator",
    image: TeamsImage3,
  },
  {
    id: 4,
    name: "Junior Volunteer",
    role: "Marketing Coordinator",
    image: TeamsImage4,
  },
];

export default function TeamSection() {
  return (
    <section className="teams-section">
      <div className="auto-container">
        <div className="sec-title-box">
          <div className="sec-title-style-three">
            <h6 className="sub-title">// Our Professionals //</h6>
            <h2 className="title text-reveal-anim">
              Meet The Designers Who <br />
              Inspire Change
            </h2>
          </div>
          <div className="sec-right-box">
            <div className="text">
              Get to know the visionary designers creating inspiring spaces with
              innovation and passion.
            </div>
            <Link to="/page-team" className="theme-btn btn-style-one">
              <span className="btn-title">View all Member</span>
              <span className="icon">
                <i className="fa-light fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-block col-xl-3 col-sm-6">
              <div className="inner-block">
                <div className="image-box">
                  <figure className="image">
                    <Link to="/page-team-details">
                      <img
                        src={member.image}
                        alt={member.name}
                      />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h5 className="name">
                    <Link to="/page-team-details">{member.name}</Link>
                  </h5>
                  <div className="designation">{member.role}</div>
                </div>
                <div className="social-links">
                  <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                  <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                  <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}