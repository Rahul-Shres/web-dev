import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2 className="section_title">
              Exercise is the key to a
              <span className="highlights"> Healthy</span> LifeStyle
            </h2>
            <p>
              Regular physical activity is one of the most important things you
              can do for your health. Being physically active can improve your
              brain health, help manage weight, reduce the risk of disease,
              strengthen bones and muscles, and improve your ability to do
              everyday activities.
            </p>

            <div className="hero-btns">
              <button className="register-btn">Get Started</button>
              <button className="watch-btn">
                <span>
                  <i class="fa-solid fa-play"></i>
                </span>{" "}
                Watch Video
              </button>
            </div>
          </div>

          {/* images */}
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
