import React from "react";
import { Link } from "react-router-dom";
import projectImg1 from "../assets/images/resource/project-details-1.jpg";
import projectImg2 from "../assets/images/resource/project-details-2.jpg";
import projectImg3 from "../assets/images/resource/project-details-3.jpg";
import projectImg4 from "../assets/images/resource/project-details-4.jpg";
import paginationBar from "../assets/images/resource/pagination-bar.png";

const ProjectDetails = () => {
  return (
    <section className="project-details pt-120 pb-70">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 mb-5 mb-lg-0">
            <div className="sec-title-style-three">
              <h6 className="sub-title">// About The Project //</h6>
              <h2 className="title text-reveal-anim">
                Deeper Dive into Our Digital Product Design Masterpieces
              </h2>
              <p className="text">
                Sed ut perspiciatis unde omniste natus voluptatem accusantiume rem aperia eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim epsam voluptatem quia voluptas aspernatur odites sed quia consequunture
              </p>
            </div>
            <Link to="#" className="theme-btn btn-style-one">
              <span className="btn-title">Visit Website</span>
              <i className="icon fa-light fa-arrow-right"></i>
            </Link>
          </div>
          <div className="col-xl-3 offset-xl-1 col-lg-4">
            <div className="project-details__content-right">
              <div className="project-details__details-box">
                <ul className="list-unstyled project-details__details-list">
                  <li>
                    <h4 className="project-details__name">Clients</h4>
                    <p>Design Studio In USA</p>
                  </li>
                  <li>
                    <h4 className="project-details__name">Project Type</h4>
                    <p>Digital Product Design</p>
                  </li>
                  <li>
                    <h4 className="project-details__name">Date</h4>
                    <p>25 April 2026</p>
                  </li>
                  <li>
                    <h4 className="project-details__name">Website</h4>
                    <p>
                      <Link to="#">yourdomain.com</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6">
            <img className="img-fluid" src={projectImg1} alt="project" />
          </div>
          <div className="col-lg-8 col-md-6">
            <img className="img-fluid" src={projectImg2} alt="project" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="title mb-30">
              Interesting facts in <br /> Development
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="mb-4">
              Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
            </p>
            <ul className="project-list">
              <li>✔ Efficient Sprint Planning</li>
              <li>✔ Standups and Demos</li>
              <li>✔ Iterative Delivery Approach</li>
              <li>✔ Problem-solving</li>
            </ul>
          </div>
        </div>
        <hr className="mt-4 mb-5" />
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="title mb-30">
              The Results of <br /> Our Project
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="mb-4">
              Will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rejects, dislikes, or avoids pleasure
            </p>
            <div className="mb-4">
              <h5>✔ Support clients</h5>
              <p>
                Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium, totam rem aperiam inventore
              </p>
            </div>
            <div>
              <h5>✔ Solve problems</h5>
              <p>
                Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium, totam rem aperiam inventore
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <img className="img-fluid" src={projectImg3} alt="project" />
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={projectImg4} alt="project" />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="project-details__pagination-box">
              <ul className="project-details__pagination list-unstyled">
                <li className="next text-start">
                  <div className="content">Previous</div>
                  <h4 className="title">
                    <Link to="#">Business Website Design</Link>
                  </h4>
                </li>
                <li className="count"><Link to="#"></Link></li>
                <li className="count"><Link to="#"></Link></li>
                <li className="count">
                  <Link to="#">
                    <img src={paginationBar} alt="" />
                  </Link>
                </li>
                <li className="count"><Link to="#"></Link></li>
                <li className="count"><Link to="#"></Link></li>
                <li className="previous text-end">
                  <div className="content">Next</div>
                  <h4 className="title">
                    <Link to="#">Mobile Application Design</Link>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;