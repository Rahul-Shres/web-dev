import React from 'react';
import heroImg from "../assets/img/gym-02.png"; // Picture of a cute logo
import dumbleImg from "../assets/img/dumble.png"; // Picture of a cute logo

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          {/* Hero Content */}
          <div className="hero__content">
            <h2>Lorem ipsum dolor sit amet <span className="highlights">consectetur</span> adipisicing elit Adipisci tenetur.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat doloremque excepturi expedita!
              Exercitationem reiciendis vero adipisci asperiores, ullam necessitatibus sed nesciunt? Nesciunt magni, sint
              ut culpa porro voluptatibus nihil error nostrum mollitia numquam omnis ab sit quod illum id aliquam.
            </p>

            <div className="hero__btns">
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <i className="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
                <div className="box-01">
                    <div className="box-02">
                        <div className="box-03">
                            <div className="box__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="heart__rate">
                        <h5>Heart Rate</h5>
                        <span><i class="ri-heart-pulse-fill"></i></span>
                        <h5>2567 BPM</h5>
                    </div>
                    <div className="gym__location">
                        <h5>Heart Rate</h5>
                        <span><i class="ri-map-pin-2-fill"></i></span>
                        <h5>Find you a best anime</h5>
                    </div>
                    <div className="dumble__icon">
                        <img src={dumbleImg} alt='' ></img>
                    </div>


                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
