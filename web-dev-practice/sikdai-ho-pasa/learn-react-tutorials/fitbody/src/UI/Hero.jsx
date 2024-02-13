import React from 'react';
import heroImg from "../assets/img/gym-02.png";
import dumbleImg from "../assets/img/dumble.png";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2 className="section_title">
              Lorem ipsum dolor sit amet <span className="highlights">consectetur</span> adipisicing elit Adipisci tenetur.
            </h2>
            <p>
              {/* Your paragraph content */}
            </p>
            <div className="hero__btns">
  <button className="register__btn">Get Started</button>
  <button className="watch__btn">
    <span class="icon">
      <i class="fas fa-play"></i> 
    </span>
    Watch Video
  </button>
</div>

          </div>

          <div className="hero__img-wrapper">
            <div className="box-01">
              <div className="box-02">
                <div className="box-03">
                  <div className="box__img">
                    <img className="box__img-src" src={heroImg} alt="" />
                  </div>
                </div>
              </div>
              <div className="heart__rate">
  <h5>Heart Rate</h5>
  <span><i class="fas fa-heartbeat"></i></span>
  <h5>2567 BPM</h5>
</div>
<div className="gym__location">
  <h5>Gym Location</h5>
  <span><i class="fas fa-map-marker-alt"></i></span>
  <h5>Find the best gym</h5>
</div>
<div className="dumble__icon">
  <img className="dumble__img" src={dumbleImg} alt='' />
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
