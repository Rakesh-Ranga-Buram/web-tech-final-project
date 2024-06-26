import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="body_container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <ul>
              <li>
                Email: <a href="mailto:email@example.com">email@example.com</a>
              </li>
              <li>Phone: 555-555-5555</li>
              <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>References and Further Reading</h5>
            <ul>
              <li>
                <Link to="/references">Reference page</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Individual Group Member Pages</h5>
            <ul>
              <li>
                <Link to="/rakesh">Rakesh Ranga Buram</Link>
              </li>
              <li>
                <Link to="/ajith">Ajith Akuthota</Link>
              </li>
              <li>
                <Link to="/kasi">Kasi Viswanadh Mogali</Link>
              </li>
              <li>
                <Link to="/annes">Annes Shaik</Link>
              </li>
              <li>
                <Link to="/bhavana">Bhavana Unnam</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
