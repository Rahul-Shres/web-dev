import React, { useEffect, useState } from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../styles/hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const upDownVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 2, ease: "linear" },
    },
  };

  const [fadeCompleted, setFadeCompleted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeCompleted(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <section id="home">
      <div className="background"></div>
      <div className="container">
        <div className="hero-wrapper">
          {/* Left section - content*/}
          <div className="hero-content">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}>
              Become a<span className="highlights"> Ninja</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5 }}>
              Embark on an epic journey filled with adventure, friendship,{" "}
              <br /> and the pursuit of dreams. Dive into the captivating world
              of Naruto, <br />
              where powerful ninjas rise to protect their villages and overcome{" "}
              <br />
              incredible challenges. weight, reduce the risk of disease,
              strengthen <br />
              bones and muscles, and improve your ability to do everyday
              activities.
            </motion.p>

            <div className="hero-btns">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}>
                Get Started
              </motion.button>
              <motion.button
                className="watch-btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}>
                <span>
                  <i className="fa-solid fa-play"></i>
                </span>
                Watch Video
              </motion.button>
            </div>
          </div>

          {/* Right Section - images */}
          <div className="hero_img">
            <div className="hero_img_wrapper">
              <motion.div
                className="box-01"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}>
                <motion.div
                  className="box-02"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}>
                  <motion.div
                    className="box-03"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}>
                    <motion.div
                      className="box_img"
                      initial="initial"
                      animate={fadeCompleted ? "animateUpDown" : "animateFade"}
                      variants={{
                        animateFade: fadeVariants,
                        animateUpDown: upDownVariants,
                      }}
                      transition={{ delay: 2, repeat: Infinity }}>
                      <img src={heroImg} alt="" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="heart-rate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}>
                <h5>Heart Rate</h5>
                <span>
                  <i className="fa-solid fa-heart-pulse"></i>
                </span>
                <h5>2567 BPM</h5>
              </motion.div>
              <motion.div
                className="gym-location"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}>
                <h5>Gym Location</h5>
                <span>
                  <i className="fa-solid fa-location-check"></i>
                </span>
                <h5>Green Hill</h5>
              </motion.div>
              <motion.div
                className="dumble_icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.5 }}>
                <img src={dumbleIcon} alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
