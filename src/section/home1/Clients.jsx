import React from "react";
import { Link } from "react-router-dom";
import client1 from "../../assets/images/resource/client1-1.png";
import client2 from "../../assets/images/resource/client1-2.png";
import client3 from "../../assets/images/resource/client1-3.png";
import client4 from "../../assets/images/resource/client1-4.png";
import client5 from "../../assets/images/resource/client1-5.png";
import client6 from "../../assets/images/resource/client1-6.png";
import client7 from "../../assets/images/resource/client1-7.png";
import client8 from "../../assets/images/resource/client1-8.png";
import bgImage from "../../assets/images/background/bg-claint1-1.jpg";

const clients = [
  { id: 1, image: client1 },
  { id: 2, image: client2 },
  { id: 3, image: client3 },
  { id: 4, image: client4 },
  { id: 5, image: client5 },
  { id: 6, image: client6 },
  { id: 7, image: client7 },
  { id: 8, image: client8 },
];

export default function ClientsSection() {
  return (
    <section className="clients-section pt-0">
      <div className="large-container">
        <div
          className="inner-container"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="outer-box">
            <div className="sec-title-style-three white text-center">
              <h6 className="sub-title">// Our Partners //</h6>
              <h2 className="title text-reveal-anim">
                Our Important Partner.
              </h2>
            </div>
            <div className="claint-outer">
              {clients.map((client) => (
                <div key={client.id} className="client-block">
                  <div className="inner-box">
                    <figure className="image mb-0">
                      <Link to="#">
                        <img
                          src={client.image}
                          alt={`client-${client.id}`}
                        />
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
}