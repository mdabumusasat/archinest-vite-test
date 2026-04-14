import React, { useEffect, useRef } from "react";

const ProgressBar = ({ title, percent }) => {
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = percent;
    }
  }, [percent]);

  return (
    <div className="team-details__progress-single">
      <h4 className="team-details__progress-title">{title}</h4>
      <div className="bar">
        <div className="bar-inner" ref={barRef}>
          <div className="count-text">{percent}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
