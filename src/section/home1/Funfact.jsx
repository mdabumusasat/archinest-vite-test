import React, { useEffect, useRef, useState } from "react";
import FunfactBgImage from "../../assets/images/background/fun-fact1-1.jpg";

const counters = [
  { id: 1, value: 26, suffix: "K+", title: "Projects Completed" },
  { id: 2, value: 98, suffix: "%", title: "Customers Satisfied" },
  { id: 3, value: 30, suffix: "+", title: "Years in Business" },
  { id: 4, value: 20, suffix: "M", title: "Special Machinery" },
];

const CounterItem = ({ value, suffix, title, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);

          const counter = setInterval(() => {
            start += increment;

            if (start >= value) {
              setCount(value);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      className="col-lg-3 col-md-6 col-sm-12 counter-clomun"
      style={{ transitionDelay: `${delay}ms` }}
      ref={ref}>
      <div className="counter-block">
        <div className="inner">
          <div className="border-style"></div>
          <div className="border-style2"></div>
          <div className="count-box">
            <span className="count-text">{count}</span>
            {suffix}
          </div>
          <h5 className="counter-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

const FunFactSection = () => {
  return (
    <section className="funfact-section pt-0">
      <div className="large-container">
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${FunfactBgImage})` }}>
          <div className="fact-counter">
            <div className="row justify-content-between">
              {counters.map((item, index) => (
                <CounterItem
                  key={item.id}
                  value={item.value}
                  suffix={item.suffix}
                  title={item.title}
                  delay={index * 300}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;