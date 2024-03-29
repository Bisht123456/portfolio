import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import Projects from "./projects";

const MySkills = () => {
  return (
    <>
      <div style={{ backgroundColor: "#091b2a", padding: "50px 50px" }}>
        <Row>
          <Col lg={6}>
            <div className="techinicalskiils">
              <h2 className="mb-4">
                <span>Technical Skills </span>
              </h2>
              <div>
                <TbBrandJavascript className="socialicon mb-2" />
                <h6> Java Script</h6>
                <div className="progress-bar">
                  <span className="js percentage"></span>
                </div>
              </div>
              <div>
                <FaReact className="socialicon mb-2" />
                <h6> ReactJS</h6>
                <div className="progress-bar">
                  <span className="react percentage"></span>
                </div>
              </div>
              <div>
                <RiBootstrapLine className="socialicon mb-2" />
                <h6> Bootstrap</h6>
                <div className="progress-bar">
                  <span className="bootstrap percentage"></span>
                </div>
              </div>
              <div>
                <IoLogoHtml5 className="socialicon mb-2" />
                <h6> HTML</h6>
                <div className="progress-bar">
                  <span className="html percentage"></span>
                </div>
              </div>
              <div>
                <FaCss3Alt className="socialicon mb-2" />
                <h6> CSS</h6>
                <div className="progress-bar">
                  <span className="css percentage"></span>
                </div>
              </div>
              <div>
                <FaGithub className="socialicon mb-2" />
                <h6> GitHub</h6>
                <div className="progress-bar">
                  <span className="git percentage"></span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="techinicalskiils">
              <h2>
                <span>Professional Skills </span>
              </h2>
              <div class="dashboard">
                <div className="d-flex">
                  <div className="d-flex flex-column align-items-center position-relative">
                    <svg>
                      <circle class="bg" cx="57" cy="57" r="52" />
                      <circle class="meter-1" cx="57" cy="57" r="52" />
                    </svg>
                    <p>Creativity</p>
                    <p className="positionali-gn">85%</p>
                  </div>
                  <div className="d-flex flex-column align-items-center position-relative">
                    <svg>
                      <circle class="bg" cx="57" cy="57" r="52" />
                      <circle class="meter-2" cx="57" cy="57" r="52" />
                    </svg>
                    <p>communication</p>
                    <p className="positionali-gn">65%</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex flex-column align-items-center position-relative">
                    <svg>
                      <circle class="bg" cx="57" cy="57" r="52" />
                      <circle class="meter-1" cx="57" cy="57" r="52" />
                    </svg>
                    <p>Problem Solving</p>
                    <p className="positionali-gn">85%</p>
                  </div>
                  <div className="d-flex flex-column align-items-center position-relative">
                    <svg>
                      <circle class="bg" cx="57" cy="57" r="52" />
                      <circle class="meter-3" cx="57" cy="57" r="52" />
                    </svg>
                    <p>Team Work</p>
                    <p className="positionali-gn">75%</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Projects />
      </div>
    </>
  );
};

export default MySkills;
