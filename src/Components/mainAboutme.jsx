import React from "react";
import { Col, Row } from "react-bootstrap";
import MySkills from "./mySkills";

const MainAboutme = () => {

  const PDF_FIlE_URL = "https://portfolio-mu-snowy-21.vercel.app/RahulCV1.pdf";
  const handleDownlodCv = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <>
      <div style={{ backgroundColor: "#091b2a", padding: "50px 50px 100px 50px" }}>
        <Row>
          <Col lg={5}>
            <div className="d-flex justify-content-center align-items-center">
              <div className="photodivv">
                <img src="/images/Artboard-15-980x536-optim.jpg" alt="image" />
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <h1 className="d-flex align-items-center justify-content-center gap-2 mb-3">
              About <span className="aboutme">Me</span>
            </h1>
            <p>
              Innovative and detail-oriented Front End Web Developer with 8
              months of comprehensive experience, including 6 months of
              intensive training. Proficient in HTML, CSS, and React JS, adept
              at crafting visually stunning and highly functional websites.
              Passionate about creating responsive and user-friendly designs to
              enhance the overall user experience. Experienced in optimizing
              website performance for speed and efficiency, ensuring seamless
              navigation. A strong collaborator with excellent communication
              skills, accustomed to working in agile environments to meet
              project deadlines and exceed client expectations. Committed to
              continuous learning and staying updated with the latest web
              technologies and design trends to deliver cutting-edge solutions.
            </p>

            <button className="aboutmebutton" onClick={() => handleDownlodCv(PDF_FIlE_URL)}>Download CV</button>
          </Col>
        </Row>
      </div>
      <MySkills />
    </>
  );
};

export default MainAboutme;
