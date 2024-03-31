import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ContactMe from "./contactMe";

const Projects = () => {
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <Row>
          <h2 className="mb-5 d-flex align-items-center justify-content-center">
            <span>Projects </span>
          </h2>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-duration="1500">
              <a href="https://e-com-sand.vercel.app/">
                <Card className="background-image mb-3">
                  <Card.Body className="colobgalign">
                    <Card.Text>Demo</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div data-aos="flip-down" data-aos-duration="1500">
              <a href="https://handmadewooden.vercel.app/">
                <Card className="background-imagee mb-3">
                  <Card.Body className="colobgalign">
                    <Card.Text>Demo</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div data-aos="fade-down" data-aos-duration="1500">
              <a href="https://interior-design-demo.vercel.app/">
                <Card className="background-imageee mb-3">
                  <Card.Body className="colobgalign">
                    <Card.Text>Demo</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <ContactMe />
    </>
  );
};

export default Projects;
