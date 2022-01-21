import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="footer-upper">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="footer-content-item">
                <div className="footer-logo">
                  <Link to="index.html">
                    <img src="assets/images/logo-white.png" alt="logo" />
                  </Link>
                </div>
                <div className="footer-details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiisicing elit, sed
                    do eiusmod tempor inc Neque porro quisquam est qui dolorem
                    aliquam quaerat luptatem. sed do eiusmod tempor inc
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="footer-content-list footer-content-item">
                <div className="footer-content-title">
                  <h3>Support</h3>
                </div>
                <ul className="footer-details footer-list">
                  <li>
                    <Link to="/faqs">FAQ's</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>

                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="footer-content-list footer-content-item">
                <div className="footer-content-title">
                  <h3>Company</h3>
                </div>
                <ul className="footer-details footer-list">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/features">Features</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Our Pricing</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="footer-content-list footer-content-item">
                <div className="footer-content-title">
                  <h3>Address</h3>
                </div>
                <ul className="footer-details footer-list">
                  <li>
                    Address:
                    <span>456 Labisto Parkways, CA, United States</span>
                  </li>
                  <li>
                    Message:
                    <span>
                      <Link to="/cdn-cgi/l/email-protection#96fff8f0f9d6f7fafff7b8f5f9fb">
                        <span
                          className="__cf_email__"
                          data-cfemail="224b4c444d62434e4b430c414d4f"
                        >
                          [email&#160;protected]
                        </span>
                      </Link>
                    </span>
                  </li>
                  <li>
                    Phone:
                    <span>
                      <Link to="tel:(+00)67834598">(+00) 678 345 98</Link>
                    </span>
                  </li>
                  <li>
                    Faq: <span>+(456) 332-897-234</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <div className="footer-lower-item footer-copyright-text">
            <p>
              Copyright ©2021 Design & Developed by
              <Link to="https://techproeducation.com" target="_blank">
                Techpro Education
              </Link>
            </p>
          </div>
          <div className="footer-lower-item footer-social-logo">
            <ul className="footer-social-list">
              <li className="social-btn social-btn-fb">
                <Link to="#">
                  <i className="bx bxl-facebook"></i>
                </Link>
              </li>
              <li className="social-btn social-btn-tw">
                <Link to="#">
                  <i className="bx bxl-twitter"></i>
                </Link>
              </li>
              <li className="social-btn social-btn-ins">
                <Link to="#">
                  <i className="bx bxl-instagram"></i>
                </Link>
              </li>
              <li className="social-btn social-btn-pin">
                <Link to="#">
                  <i className="bx bxl-pinterest-alt"></i>
                </Link>
              </li>
              <li className="social-btn social-btn-yt">
                <Link to="#">
                  <i className="bx bxl-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
