import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const handleAboutMe = () => {
    const targetPosition = 600;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  const handleHome = () => {
    const targetPosition = 0;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  const handleSkills = () => {
    const targetPosition = 1100;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };
  const handleProjects = () => {
    const targetPosition = 1800;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  const handleContact = () => {
    const targetPosition = 2100;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="main-nav sticky-top">
        <Row>
          <Col lg={4}>
            <div data-aos="zoom-out" data-aos-duration="1500">
              <h4>Portfolio</h4>
            </div>
          </Col>
          <Col lg={8}>
            <div className="nav-bar">
              <div data-aos="zoom-out" data-aos-duration="1500">
                <h5 onClick={handleHome}>Home</h5>
              </div>
              <div data-aos="zoom-out" data-aos-duration="1500">
                <h5 onClick={handleAboutMe}>About</h5>
              </div>
              {/* <div data-aos="zoom-out" data-aos-duration="1500">
                <h5>Services</h5>
              </div> */}
              <div data-aos="zoom-out" data-aos-duration="1500">
                <h5 onClick={handleSkills}>Skills</h5>
              </div>
              <div data-aos="zoom-out" data-aos-duration="1500">
                <h5 onClick={handleProjects}>Project</h5>
              </div>
              <div data-aos="zoom-out" data-aos-duration="1500">
                <h5 onClick={handleContact}>Contact</h5>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Navbar;
