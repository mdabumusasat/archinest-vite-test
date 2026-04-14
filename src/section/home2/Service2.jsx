import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function ServicesSectionHomeTwo() {
  const projects = useCounter(26);
  const customers = useCounter(98);
  const years = useCounter(30);
  const machinery = useCounter(20);

  const features = [
    "We are a locally owned and operated company",
    "Our technicians are the best in the market",
    "We’re on the job, ready to serve, 24/7",
    "Flair for both schematic and concept design reflecting client vision",
  ];

  return (
    <section className="services-section-home-two">
      <div className="container">
        <div className="row">
          <div className="funfact-column col-xl-6 order-xl-0 order-1">
            <div className="inner-column">
              <div className="funfact-block-two">
                <div className="inner">
                  <div className="count-box">{projects}k+</div>
                  <h5 className="counter-title">Projects Completed</h5>
                </div>
              </div>
              <div className="funfact-block-two">
                <div className="inner">
                  <div className="count-box">{customers}%</div>
                  <h5 className="counter-title">Customers Satisfied</h5>
                </div>
              </div>
            </div>
            <div className="inner-column">
              <div className="funfact-block-two">
                <div className="inner">
                  <div className="count-box">{years}+</div>
                  <h5 className="counter-title">Years in Business</h5>
                </div>
              </div>
              <div className="funfact-block-two">
                <div className="inner">
                  <div className="count-box">{machinery}M</div>
                  <h5 className="counter-title">Special Machinery</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-xl-6">
            <div className="inner-column">
              <div className="sec-title-style-three">
                <h6 className="sub-title">// Why Choose Us //</h6>
                <h2 className="title text-reveal-anim">
                  Why Clients Trust Us to Transform Ideas into Extraordinary
                  Architectural Masterpieces
                </h2>
                <div className="text">
                  We blend creativity, expertise, and precision to craft
                  extraordinary architectural masterpieces that exceed client
                  expectations.
                </div>
              </div>
              <ul className="list-style-home-two">
                {features.map((item, index) => (
                  <li key={index}>
                    <span className="icon">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="btn-box">
                <Link to="/page-about" className="theme-btn btn-style-one">
                  <span className="btn-title">Read More</span>
                  <span className="icon">
                    <i className="fa-light fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}