import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

const Skills = ({ data }) => {
  const icons = {
    frontend: <FaCode />,
    backend: <FaServer />,
    database: <FaDatabase />,
    tools: <FaTools />,
  };
  return (
    <>
      <section className="skills py-5">
        <div className="container py-5">
          <div className="custom-heading text-center mb-5">
            <span>MY TECHNICAL EXPERTISE</span>
            <h2>
              Technical <span>Skills</span>
            </h2>
            <p>Technologies and tools I use to build digital solutions.</p>
          </div>
          <div className="row g-4">
            {data.map((category, index) => (
              <div className="col-md-6 col-lg-6">
                <div className="skill-card h-100">
                  <div className="custom-subheading">
                    <div className="custom-icon">
                      {icons[category.icon] || <FaLayerGroup />}
                    </div>
                    <h4>{category.category}</h4>
                  </div>

                  <div className="skill-items">
                    {category.items.map((skill, skillIndex) => (
                      <div className="custom-badge" key={skillIndex}>
                        <h5>{skill}</h5>
                      </div>
                    ))}
                    <div className="custom-footer">
                      <span>{category.items.length} Technologies</span>
                      <span className="skill-arrow">↗</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
