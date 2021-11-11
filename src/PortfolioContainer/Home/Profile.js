import React from "react";
import Typical from "react-typical";
import'./Profile.css'

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>
              <a href="https://www.facebook.com/profile.php?id=100004540803036">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/___celi__/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/aCeli__">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/araceli-garcia-119972209/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Araceli</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic 😃",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 😎",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                    "Ambitious 📈",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Enjoy building applications with front end and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire me{" "}
            </button>
            <a href="Resume.pdf" download="Araceli Resume.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-image">
          <div className="profile-image-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
