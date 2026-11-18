import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PersonalInfo = ({ data }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">
          {/* Left Content */}
          <div className="col-lg-7 order-2 order-lg-1">
            <p className="hero-greeting mt-4">HELLO, I'M</p>

            <h1 className="hero-title">{data.name}</h1>

            <h2 className="hero-designation">{data.designation}</h2>

            <p className="hero-description">{data.about}</p>

            <div className="hero-location">
              <FaMapMarkerAlt />
              <span>{data.location}</span>
            </div>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#projects" className="btn btn-primary hero-btn">
                Explore My Work <FaArrowRight />
              </a>

              <a
                href={data.resume}
                download
                className="btn btn-outline-light hero-outline-btn"
              >
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="hero-socials mt-5">
              <span>CONNECT WITH ME</span>

              <div className="d-flex gap-3 mt-3">
                <a
                  href={data.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>

                <a href={`mailto:${data.email}`}>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right Profile Card */}
          <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="profile-wrapper">
              <div className="floating-code">
                <FaCode />
                <span>Building ideas into reality</span>
              </div>

              <div className="profile-card">
                <div className="profile-top">
                  <span>DEVELOPER PROFILE</span>
                  <span className="profile-dot"></span>
                </div>

                <div className="profile-avatar">
                  <span>{data.name?.charAt(0)?.toUpperCase()}</span>
                </div>

                <h3>{data.name}</h3>
                <p className="profile-role">{data.designation}</p>

                <div className="profile-divider"></div>

                <div className="profile-info">
                  <div>
                    <span>Experience</span>
                    <strong>{data.experience}</strong>
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>{data.location}</strong>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong className="profile-email">{data.email}</strong>
                  </div>
                </div>

                <div className="profile-footer">
                  <span className="status-dot"></span>
                  Open to new opportunities
                </div>
              </div>

              <div className="floating-badge">
                <FaCode />
                <span>Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
