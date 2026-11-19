import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaDesktop,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";

const AboutMe = ({ data }) => {
  const strengths = [
    { icon: <FaCode />, title: "Full Stack Web Development" },
    { icon: <FaServer />, title: "REST API Development" },
    { icon: <FaDatabase />, title: "Database Design" },
    { icon: <FaDesktop />, title: "Responsive UI Development" },
  ];
  return (
    <>
      <section className="about-me py-5">
        <div className="container py-5">
          <div className="custom-heading text-center mb-5">
            <span>GET TO KNOW ME</span>
            <h2>
              About <span>Me</span>
            </h2>
            <p>A little introduction about my professional journey.</p>
          </div>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-subtitles">
                  <FaBriefcase /> PROFESSIONAL JOURNEY
                </div>
                <h3>
                  Turning Ideas Into
                  <span> Digital Solutions.</span>
                </h3>
                <p>{data.aboutTwo}</p>
                <p>{data.aboutThree}</p>

                <div className="about-stats row g-3 mt-4">
                  <div className="col-6">
                    <div className="stat-card">
                      <div className="custom-icon mb-2">
                        <FaBriefcase />
                      </div>
                      <h4>
                        {data.experience}
                        <span>+</span>
                      </h4>
                      <div className="custom-footer">
                        <span>Years Experience</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card">
                      <div className="custom-icon mb-2">
                        <FaProjectDiagram />
                      </div>
                      <h4>{data.projectCount}</h4>
                      <div className="custom-footer">
                        <span>Major Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="strength-card">
                <div className="custom-heading">
                  <span>MY EXPERTISE</span>
                  <h3>What I Bring</h3>
                  <p>Skills and strengths I bring to every project.</p>
                </div>

                <div className="strength-list">
                  {strengths.map((item, index) => (
                    <div className="custom-badge" key={index}>
                      <div className="custom-icon">{item.icon}</div>

                      <h5>{item.title}</h5>

                      <span className="strength-arrow">↗</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
