import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section>
      <div className="background"></div>
      <div className="container">
        <div className="hero-wrapper">
          {/* Left section - content*/}
          <div className="hero-content">
            <h2 className="section-title">
              Become a<span className="highlights"> Ninja</span>
            </h2>
            <p>
              Embark on an epic journey filled with adventure, friendship,{" "}
              <br /> and the pursuit of dreams. Dive into the captivating world
              of Naruto, <br />
              where powerful ninjas rise to protect their villages and overcome{" "}
              <br />
              incredible challenges. weight, reduce the risk of disease,
              strengthen <br />
              bones and muscles, and improve your ability to do everyday
              activities.
            </p>

            <div className="hero-btns">
              <button>Get Started</button>
              <button className="watch-btn">
                <span>
                  <i class="fa-solid fa-play"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Section - images */}
          <div className="hero_img">
            <div className="hero_img_wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box_img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart-rate">
                <h5>Heart Rate</h5>
                <span>
                  <i class="fa-solid fa-heart-pulse"></i>
                </span>
                <h5>2567 BPM</h5>
              </div>
              <div className="gym-location">
                <h5>Gym Location</h5>
                <span>
                  <i class="fa-solid fa-location-check"></i>
                </span>
                <h5>Green Hill</h5>
              </div>
              <div className="dumble_icon">
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
