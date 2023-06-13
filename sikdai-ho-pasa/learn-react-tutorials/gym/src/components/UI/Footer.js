import React from "react";
import extended from "../../assets/img/extended.png";
import "../../styles/footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wraper">
            <div className="footer-box">
              <div className="logo">
                <div className="logo-img">
                  <img src={extended} alt="" />
                </div>
                <h2>Fitbody</h2>
              </div>
              <p>ewr er esdfds dsfsdf sdfsdf sdfsdf sdfs fsdfs dfsd sgt tg</p>
            </div>
            <div className="footer-box">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="/program">Our Program</a>
                </li>
                <li>
                  <a href="/plan">Our Plan</a>
                </li>
                <li>
                  <a href="/member">Become a Member</a>
                </li>
              </ul>
            </div>

            <div className="footer-box">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="/program">Our Program</a>
                </li>
                <li>
                  <a href="/plan">Our Plan</a>
                </li>
                <li>
                  <a href="/member">Become a Member</a>
                </li>
              </ul>
            </div>

            <div className="footer-box">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="/program">Our Program</a>
                </li>
                <li>
                  <a href="/plan">Our Plan</a>
                </li>
                <li>
                  <a href="/member">Become a Member</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">Copyright - {year} developed by Rahul. All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
