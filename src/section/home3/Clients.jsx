import React from "react";
import { Link } from "react-router-dom";
import client1 from "../../assets/images/resource/client3-1.png";
import client2 from "../../assets/images/resource/client3-2.png";
import client3 from "../../assets/images/resource/client3-6.png";
import client4 from "../../assets/images/resource/client3-4.png";
import client5 from "../../assets/images/resource/client3-5.png";
import client6 from "../../assets/images/resource/client3-6.png";
import client7 from "../../assets/images/resource/client3-7.png";
import client8 from "../../assets/images/resource/client3-8.png";
import bgImage from "../../assets/images/background/bg-claint1-1.jpg";

const clients = [
  { img: client1 },
  { img: client2 },
  { img: client3 },
  { img: client4 },
  { img: client5 },
  { img: client6 },
  { img: client7 },
  { img: client8 },
];

const ClientsSection = () => {
  return (
    <section className="clients-section home-3 pt-0">
      <div className="outer-container">
        <div
          className="inner-container"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}>
          <div className="outer-box">
            <div className="sec-title-style-three text-center">
              <h6 className="sub-title">// Our Partners //</h6>
              <h2 className="title text-reveal-anim">
                Our Important Partner.
              </h2>
            </div>
            <div className="claint-outer">
              {clients.map((client, index) => (
                <div className="client-block" key={index}>
                  <div className="inner-box">
                    <figure className="image mb-0">
                      <Link to="#">
                        <img src={client.img} alt={`Client ${index + 1}`} />
                      </Link>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;