import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>123 Example Street</p>
                    <p>City, State ZIP</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>

                <div className="footer-column">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for updates.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
