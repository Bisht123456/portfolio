import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaThreads, FaXTwitter } from "react-icons/fa6";

const Aboutme = () => {
  const handleAboutMe = () => {
    const targetPosition = 470;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };
  return (
    <>
      <div
        style={{ backgroundColor: "#091b2a", padding: "100px 50px 200px 50px" }}
      >
        <Row>
          <Col lg={6}>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <h4>Hello. It's me</h4>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <h2>Rahul Bisht</h2>
            </div>
            <div className="d-flex gap-2">
              <h4>And I'm a</h4>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <h4>Front End Developer</h4>
              </div>
            </div>
            <div data-aos="zoom-out-left" data-aos-duration="1500">
              <p>
                I'm a web Designer with extensive experience for over 3 years.
                expertise is to create and website design, Fronted design, and
                many more...
              </p>
            </div>
            <div className="d-flex gap-4 mt-5">
              <a href="https://www.facebook.com/rahul.bisht7930?mibextid=LQQJ4d">
                {" "}
                <FaFacebook className="socialicon" />
              </a>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7170343606765965312?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7170343606765965312%29">
                {" "}
                <FaLinkedin className="socialicon" />
              </a>
              <a href="https://www.instagram.com/rahul_bisht_03?igsh=MXZmZ3F4cXNha211aQ==">
                {" "}
                <FaInstagram className="socialicon" />
              </a>
              <a href="">
                {" "}
                <FaThreads className="socialicon" />
              </a>
              <a href="">
                <FaXTwitter className="socialicon" />
              </a>
            </div>

            <button className="aboutmebutton" onClick={handleAboutMe}>
              ABOUT ME
            </button>
          </Col>
          <Col lg={6}>
            <div className="d-flex justify-content-center align-items-center">
              <div className="photodiv">
                {/* <img src="/images/images.jpeg" alt="image" /> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Aboutme;
