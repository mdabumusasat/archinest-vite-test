"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SkillProgressBar = ({ title, targetPercentage, speed = 3000 }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const increment = targetPercentage / (speed / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetPercentage) {
        current = targetPercentage;
        clearInterval(interval);
      }
      setPercentage(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [targetPercentage, speed]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <div className="skill-title">{title}</div>
      </div>

      <div className="skill-bar">
        <div className="bar-inner">
          <div
            className="bar progress-line"
            style={{ width: `${percentage}%` }}
          >
            <div className="skill-percentage">
              <div className="count-box">
                <span className="count-text">{percentage}</span>%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SkillProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  targetPercentage: PropTypes.number.isRequired,
  speed: PropTypes.number,
};

export default SkillProgressBar;
