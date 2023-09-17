import React from "react";
import Video from "./Video";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <>
     
      <div className="description_section">
        <motion.div className="information_container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >
          <h1 className="description_section_title">
            Our roadmap will ultimately enable 100 billion-parameter models in a
            chip the size of a thumbnail.
          </h1>
          <br />
          <p>
            We are the world leaders in algorithm/hardware co-design for
            artificial intelligence. Every product on our roadmap utilizes this
            innovative approach.
          </p>
          <br />
          <p>
            Our engineering roadmap enables multi-generation progress, and we
            will enter the market at volume with a Gen 1 product 100x better
            than the status quo.
          </p>
          <br />
          <p>
            See the About Us section for more information on our technology and
            team.
          </p>
        </motion.div>
        <Video />
      </div>
    </>
  );
};

export default Description;
