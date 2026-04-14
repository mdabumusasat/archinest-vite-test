import React from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/images/resource/project1-1.jpg";
import project2 from "../assets/images/resource/project1-2.jpg";
import project3 from "../assets/images/resource/project1-3.jpg";
import project4 from "../assets/images/resource/project1-4.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      img: project1,
      title: "3D Visualization",
      categories: ["Civil", "House"],
    },
    {
      img: project2,
      title: "3D Visualization",
      categories: ["Civil", "House"],
    },
    {
      img: project3,
      title: "3D Visualization",
      categories: ["Civil", "House"],
    },
    {
      img: project4,
      title: "3D Visualization",
      categories: ["Civil", "House"],
    },
  ];

  return (
    <section className="projects-section">
      <div className="auto-container">
        <div className="row g-24">
          {projects.map((project, index) => (
            <div key={index} className="project-block col-lg-6 wow zoomIn">
              <div className="inner-block">
                <div className="image-box">
                  <figure className="image">
                    <Link to="/page-project-details">
                      <img src={project.img} alt={project.title} />
                    </Link>
                  </figure>
                </div>
                <div className="catagories-box">
                  {project.categories.map((cat, i) => (
                    <div key={i} className="catagory">
                      <Link to="/page-project-details">{cat}</Link>
                    </div>
                  ))}
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <div className="title-box">
                      <h4 className="title">
                        <Link to="/page-project-details">{project.title}</Link>
                      </h4>
                      <Link to="/page-project-details">
                        <i className="icon fa-light fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="text">
                      From layouts to finishes, meticulously refine every aspect
                      to achieve perfect design execution.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}