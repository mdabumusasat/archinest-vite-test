import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FunfactImage1 from "../../assets/images/resource/funfact-h3-1.jpg";

const counters = [
  {
    id: 1,
    number: "01",
    end: 120,
    suffix: "+",
    title: "Successful projects \ncompleted",
    text: "We've delivered 120+ projects that help companies generate real results.",
  },
  {
    id: 2,
    number: "02",
    end: 95,
    suffix: "%",
    title: "Customer \nsatisfaction rate",
    text: "Delivering excellence with a customer satisfaction rate every time.",
  },
];

const FunfactSectionThree = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          if (val < counters[i].end) {
            return val + Math.ceil(counters[i].end / 50);
          }
          return counters[i].end;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="funfact-section-three">
      <div className="container">
        <div className="sec-title-style-two col-lg-12">
          <h6 className="sub-title">// Why Choose Us //</h6>
          <h2 className="title text-reveal-anim">
            Why Clients Choose Us To Transform Their Vision Into Exceptional Architectural Realities
          </h2>
        </div>
        <div className="row">
          <div className="col-xxl-4 col-xl-4">
            <div className="images-box">
              <figure className="image">
                <img
                  src={FunfactImage1}
                  alt="funfact"
                />
              </figure>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8 offset-xxl-2">
            <div className="counter-column-three">
              <div className="inner-column">
                <div className="content-box">
                  <div className="text text-reveal-anim">
                    We combine creativity, expertise, and precision to transform
                    <br />
                    client visions into sustainable, timeless, and exceptional
                    <br />
                    architectural masterpieces
                  </div>
                </div>
                <div className="row gx-2">
                  {counters.map((item, index) => (
                    <div className="col-lg-6 col-md-6" key={item.id}>
                      <div className="counter-block-three wow zoomIn">
                        <div className="inner">
                          <div className="top-box">
                            <div className="number">{item.number}</div>
                            <div className="count-box">
                              <span className="count-text">
                                {counts[index]}
                              </span>
                              {item.suffix}
                            </div>
                          </div>
                          <div className="content">
                            <div className="counter-title">
                              {item.title.split("\n").map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))}
                            </div>
                            <div className="text">{item.text}</div>
                          </div>
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
  );
};

export default FunfactSectionThree;