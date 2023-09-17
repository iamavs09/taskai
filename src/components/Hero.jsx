import React from "react";
import electrical from "../assets/electrical.jpg";
import Rainchip from "../assets/Rainchip.png";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: `${electrical}`,
    text: " However, there are serious barriers when deploying cloud-based AI to billions of devices, including high network latency and bandwidth requirements, high operational expenses, and more.",
  },
  {
    id: 2,
    image: `${Rainchip}`,
    text: "At Rain, we're building AI processors - artificial brains - that will enable ubiquitous advanced artificial intelligence, be the platform upon which the trillion-dollar industries of the AI era will be built, and ultimately power fully autonomous AGI.",
  },
];

const Hero = () => {
  return (
    <>
      <main className="hero">
        <div className="hero_content_wrapper">
          <h1 className="title">
            Cloud-based AI falls short when deploying AI en masse.
          </h1>

          <motion.div className="card_container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            {data.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <img src={item.image} alt="electrical image" />
                  <p>{item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Hero;
