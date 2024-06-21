import React from "react";
import "./Profile.css";
import linkedIn from "../../assets/linkedin.png";
import gitHub from "../../assets/github.png";
import emailIcon from "../../assets/email.png";
import { Link } from "react-router-dom";

function Profile(props) {
  const { image, name, linkedInURL, gitHubURL, role, email, about } = props;
  return (
    <div className="body_container">
      <section id="profile">
        <div className="section__pic-container">
          <img src={image} alt="Rakesh" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">{name}</h1>
          <p className="section__text__p2">Role: {role}</p>
          <div id="socials-container">
            <Link to={linkedInURL} target="_blank">
              <img src={linkedIn} alt="My LinkedIn profile" className="icon" />
            </Link>
            <Link to={gitHubURL} target="_blank">
              <img src={gitHub} alt="My Github profile" className="icon" />
            </Link>
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <p className="bio">{about}</p>
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <Link to="mailto:examplemail@gmail.com">{email}</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
