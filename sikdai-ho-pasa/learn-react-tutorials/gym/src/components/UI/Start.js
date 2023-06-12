import React from "react";
import "../../styles/start.css";
import avatar02 from "../../assets/img/avatar02.png";

const Start = () => {
  return (
    <section>
      <div className="container">
        <div className="start-wrapper">
          <div className="start-img">
            <img src={avatar02} alt="" />
          </div>

          <div className="start-content">
            <h2 className="section-title">Ready to <span className="highlights">Watch</span></h2>
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

            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
