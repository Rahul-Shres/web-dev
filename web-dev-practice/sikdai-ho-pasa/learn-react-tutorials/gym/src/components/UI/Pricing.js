import React from "react";
import "../../styles/pricing.css";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-top">
          <h2 className="section-title">
            Watch <span className="highlights">Now</span>
          </h2>
          <p>jsdnc jsdnrak ak kra kn kwa nkrnk n nwek ank n kank</p>
        </div>

        <div className="pricing-wrapper">
          <div className="pricing-item">
            <div className="pricing-card-top">
              <h2 className="section-title">Regular</h2>
              <h2 className="pricing section-title">
                Regular <span>$50</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Customer Support
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Personal Trainer
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Standard Options
                </li>
              </ul>
              <button className="register-button">Register Now</button>
            </div>
          </div>

          <div className="pricing-item pricing-item-2">
            <div className="pricing-card-top">
              <h2 className="section-title">Regular Member</h2>
              <h2 className="pricing section-title">
                $50<span>/a month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Customer Support
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Personal Trainer
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Standard Options
                </li>
              </ul>
              <button className="register-button">Register Now</button>
            </div>
          </div>

          <div className="pricing-item pricing-item-3">
            <div className="pricing-card-top">
              <h2 className="section-title">Regular</h2>
              <h2 className="pricing section-title">
                Regular <span>$50</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Customer Support
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Personal Trainer
                </li>
                <li>
                  <span>
                    <i class="fa-sharp fa-solid fa-square-check"></i>
                  </span>{" "}
                  Standard Options
                </li>
              </ul>
              <button className="register-button">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
