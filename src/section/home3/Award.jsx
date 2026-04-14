import React from "react";
import award1 from "../../assets/images/resource/award-3-1.png";
import award2 from "../../assets/images/resource/award-3-2.png";
import award3 from "../../assets/images/resource/award-3-3.png";

const awardsData = [
  {
    year: "2026",
    image: award1,
    title: "Design Excellence Award",
    text: "Innovative residential projects to groundbreaking commercial developments, we are proud to be honored for our dedication to design, craftsmanship, and sustainability.",
  },
  {
    year: "2025",
    image: award2,
    title: "Architectural Innovation Prize",
    text: "Our architectural achievements have garnered numerous awards, reflecting our passion for creating spaces that blend innovation with functionality.",
  },
  {
    year: "2023",
    image: award3,
    title: "Creative Space Award",
    text: "Our projects have been celebrated for their unique blend of creativity and practicality. Winning awards for both aesthetics and functionality.",
  },
];

const AwardsSection = () => {
  return (
    <section className="award-section-three">
        <div className="auto-container">
            <div className="sec-title-style-two">
                <div className="row w-100">
                    <h6 className="sub-title col-xl-2">// We’re Achieved //</h6>
                    <h2 className="title text-reveal-anim col-xl-7 offset-xl-3">
                    Our Most Prestigious Awards And <br />
                    Industry Honors
                    </h2>
                </div>
            </div>
            {awardsData.map((award, index) => (
            <div className="award-block" key={index}>
                <div className="inner-block">
                    <div className="row w-100">
                        <div className="year col-xxl-1 col-xl-2 col-lg-2 col-md-2">
                        {award.year}
                        </div>
                        <figure className="image col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-2 offset-xxl-1">
                        <img src={award.image} alt={award.title} />
                        </figure>
                        <div className="content-box col-xxl-7 col-xl-8 col-lg-8 col-md-8 offset-xxl-2 offset-xl-1 offset-lg-1">
                        <div className="title">{award.title}</div>
                        <div className="text">{award.text}</div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
};

export default AwardsSection;