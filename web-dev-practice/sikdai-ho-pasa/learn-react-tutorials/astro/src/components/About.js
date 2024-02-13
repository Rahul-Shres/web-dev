import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './about.css'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from('.title', {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.title',
        start: 'top 80%',
      },
    });

    gsap.from('.p', {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.p',
        start: 'top 80%',
      },
    });

    gsap.from('.section-one button', {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.section-one button',
        start: 'top 80%',
      },
    });

    gsap.from('.pyramid', {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: '.pyramid',
        start: 'top 80%',
      },
    });

    gsap.from('.hand', {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.hand',
        start: 'top 80%',
      },
    });

    gsap.from('.star-s2', {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: '.star-s2',
        start: 'top 80%',
      },
    });

    gsap.from('.line', {
      opacity: 0,
      width: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.line',
        start: 'top 80%',
      },
    });

    gsap.from('.star-s4', {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: '.star-s4',
        start: 'top 80%',
      },
    });

    gsap.from('.type', {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.type',
        start: 'top 80%',
      },
    });

    gsap.from('.line-blue', {
      opacity: 0,
      width: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.line-blue',
        start: 'top 80%',
      },
    });

    gsap.from('.star-s4', {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: '.star-s4',
        start: 'top 80%',
      },
    });

    gsap.from('.card', {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.card',
        start: 'top 80%',
      },
    });

    gsap.from('.star-s5', {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.star-s5',
        start: 'top 80%',
      },
    });

    gsap.from('.txt', {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.txt',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section className="section-one">
      <div className="container">
        <div className="left-side">
          <div className="title">
            <h1>
              get gold &amp;
              <img src="./img/star.png" alt="" className="star" />
              <br />
              silver delivered
              <br />
              to your door
            </h1>
          </div>

          <p className="p">
            Gold and silver have intrinsic value and add diversification to your portfolio. We help investors narrow their decision down to either buying gold or silver bullion bars or coins.
          </p>

          <button>know more</button>
        </div>
        <div className="right-side">
          <div className="pyramid">
            <img src="./img/gold.png" alt="" className="gold glow image" />
          </div>

          <div className="star-s2">
            <img src="./img/star.png" alt="" className="star" />
          </div>

          <div className="line"></div>

          <div className="star-s4">
            <img src="./img/star.png" alt="" className="star" />
          </div>

          <div className="type">
            <h2>Investments</h2>
            <h2>Gold</h2>
            <h2>Silver</h2>
          </div>

          <div className="line-blue"></div>

          <div className="star-s4">
            <img src="./img/star.png" alt="" className="star" />
          </div>

          <div className="card">
            <div className="star-s5">
              <img src="./img/star.png" alt="" className="star" />
            </div>

            <h3 className="txt">Holding</h3>

            <div className="hand">
              <img src="./img/hand.png" alt="" className="hand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
