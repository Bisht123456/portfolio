import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactMe = () => {
  return (
    <>
      <div style={{ marginTop: "200px" }}>
        <Row>
          <Col lg={6}>
            <div data-aos="zoom-in-down" data-aos-duration="1500">
              <h1 className="d-flex align-items-center justify-content-center gap-2 mb-3">
                Contact <span className="aboutme">Me</span>
              </h1>
            </div>
          </Col>
          <Col lg={6}>
            <div data-aos="zoom-in-down" data-aos-duration="1500">
              <h4>
                Contact No. +91 <span className="aboutme">9888848157</span>
              </h4>
              <h4>
                Email :-{" "}
                <span className="aboutme">rahul9888.bisht@gmail.com</span>
              </h4>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactMe;
