import React, { useEffect, useState } from "react";
import { Row, Col, Container, Offcanvas, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoReorderThreeOutline } from "react-icons/io5";

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
          <Col lg={4} md={4} sm={4}>
            <div data-aos="zoom-out" data-aos-duration="1500">
              <h4>Portfolio</h4>
            </div>
          </Col>
          <Col lg={8} md={8} sm={8}>
            <div className="d-flex justify-content-end align-items-center">
              {" "}
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
              <div>
                <IoReorderThreeOutline
                  variant="primary"
                  onClick={handleShow}
                  className="threeline"
                />
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Portfolio</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <h5 onClick={handleHome}>Home</h5>
                    <h5 onClick={handleAboutMe}>About</h5>
                    <h5 onClick={handleSkills}>Skills</h5>
                    <h5 onClick={handleProjects}>Project</h5>
                    <h5 onClick={handleContact}>Contact</h5>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>

            {/* {[false, "md"].map((expand) => (
              <Navbar
                key={expand}
                expand={expand}
                className="bg-body-tertiary mb-3"
              >
                <Container fluid>
                  <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end" 
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        Offcanvas
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body></Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))} */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Navbar;
