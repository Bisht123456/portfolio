import React, { useEffect, useState } from "react";
import { Row, Col, Container, Offcanvas, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const handleAboutMe = () => {
    const targetPosition = 600;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    setShow(false)
  };

  const handleHome = () => {
    const targetPosition = 0;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    setShow(false)
  };

  const handleSkills = () => {
    const targetPosition = 1100;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    setShow(false)
  };
  const handleProjects = () => {
    const targetPosition = 1800;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    setShow(false)
  };

  const handleContact = () => {
    const targetPosition = 2100;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    setShow(false)
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="main-nav sticky-top">
        <Row>
          <Col lg={4} md={4} sm={6} xs={6}>
            <div>
              <div data-aos="zoom-out" data-aos-duration="1500">
                <h4>Portfolio</h4>
              </div>
            </div>
          </Col>
          <Col lg={8} md={8} sm={6} xs={6}>
            <div className="d-flex justify-content-end align-items-center">
              <div className="nav-bar">
                <div data-aos="zoom-out" data-aos-duration="1500">
                  <h5 onClick={handleHome}>Home</h5>
                </div>
                <div data-aos="zoom-out" data-aos-duration="1500">
                  <h5 onClick={handleAboutMe}>About</h5>
                </div>
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
              <div>
                <IoReorderThreeOutline
                  variant="primary"
                  onClick={handleShow}
                  className="threeline"
                />
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header style={{ backgroundColor: "#071623" }} closeButton>
                    <Offcanvas.Title >Portfolio</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body style={{ backgroundColor: "#071623" }}>
                    <h5 onClick={handleHome} >Home</h5>
                    <h5 onClick={handleAboutMe}>About</h5>
                    <h5 onClick={handleSkills}>Skills</h5>
                    <h5 onClick={handleProjects}>Project</h5>
                    <h5 onClick={handleContact}>Contact</h5>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Navbar;
