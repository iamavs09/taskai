import React from "react";
import video from "../assets/video.mp4";
import { motion } from "framer-motion";


const Video = () => {
  return (
    <>
      <section className="video">
        <motion.div className="video_wrapper" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <video src={video} controls></video>
        </motion.div>
      </section>
    </>
  );
};

export default Video;
