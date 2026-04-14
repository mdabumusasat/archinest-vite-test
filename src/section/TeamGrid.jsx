import React from "react";
import { Link } from "react-router-dom";
import team1 from "../assets/images/resource/team1-1.jpg";
import team2 from "../assets/images/resource/team1-2.jpg";
import team3 from "../assets/images/resource/team1-3.jpg";
import team4 from "../assets/images/resource/team1-4.jpg";

const teamData = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: team1,
  },
  {
    id: 2,
    name: "David Michael",
    role: "Marketing Coordinator",
    image: team2,
  },
  {
    id: 3,
    name: "David Jonathan Hayes",
    role: "Marketing Coordinator",
    image: team3,
  },
  {
    id: 4,
    name: "Junior Volunteer",
    role: "Marketing Coordinator",
    image: team4,
  },
  {
    id: 5,
    name: "Junior Volunteer",
    role: "Marketing Coordinator",
    image: team4,
  },
  {
    id: 6,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: team1,
  },
  {
    id: 7,
    name: "David Michael",
    role: "Marketing Coordinator",
    image: team2,
  },
  {
    id: 8,
    name: "David Jonathan Hayes",
    role: "Marketing Coordinator",
    image: team3,
  },
];

const TeamsSection = () => {
  return (
    <section className="teams-section">
      <div className="auto-container">
        <div className="row">
          {teamData.map((member) => (
            <div key={member.id} className="team-block col-xl-3 col-sm-6">
              <div className="inner-block mb-20">
                <div className="image-box">
                  <figure className="image">
                    <Link to="#">
                      <img src={member.image} alt={member.name} />
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
                  <Link to="#">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;