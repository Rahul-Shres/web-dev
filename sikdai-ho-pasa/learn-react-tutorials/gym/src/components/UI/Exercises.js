import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yogaPose from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'
const Exercises = () => {
  return (
    <section>
      <div className="container exercise-container">
        <div className="exercise-top">
          <h2 className="section-title">
            Benefits of Becoming<span className="highlight"> Ninja</span>
          </h2>
          <p>
            Embark on an epic journey filled with adventure, friendship, <br />{" "}
            and the pursuit of dreams. Dive into the captivating world of
            Naruto, <br />
            where powerful ninjas rise to protect their villages and overcome{" "}
            <br />
            incredible challenges. weight, reduce the risk of disease,
            strengthen <br />
            bones and muscles, and improve your ability to do everyday
            activities.
          </p>
        </div>
        <div className="exercise_wrapper">
          <div className="exercise_item">
            <span className="exercise-icon">
              <img src={extended} alt="" />
            </span>
            <div className="exercise_content">
            <h4>Healthy Life</h4>
            <p>
              Embark on an epic journey filled with adventure, friendship,{" "}
              incredible challenges.
            </p>
          </div>
          </div>
          <div className="exercise_item">
            <span className="exercise-icon">
              <img src={yogaPose} alt="" />
            </span>
            <div className="exercise_content">
            <h4>Healthy Life</h4>
            <p>
              Embark on an epic journey filled with adventure, friendship,{" "}
              incredible challenges.
            </p>
          </div>
          </div>
          <div className="exercise_item">
            <span className="exercise-icon">
              <img src={lunges} alt="" />
            </span>
            <div className="exercise_content">
            <h4>Healthy Life</h4>
            <p>
              Embark on an epic journey filled with adventure, friendship,{" "}
              incredible challenges.
            </p>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Exercises;
