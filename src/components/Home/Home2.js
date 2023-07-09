import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/new1.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              NICE TOO<span className="purple"> MEET </span> YOU
            </h1>
            <p className="home-about-body">
              I AM A THIRD YEAR ENGINNERING STUDENT.
              <br />
              <br />
              I HAVE GOOD KNOWLEDGE ON
              <i>
                <b className="purple">REACT, HTML, CSS, JAVASCRIPT & FIREBASE. </b>
              </i>
              <br />
              <br />
              I LIKE TO BUILD &nbsp;
              <i>
                <b className="purple">WEB TECHNOLOGUY </b> &
                ALSO IN AREA OF AI.  
              </i>
              <br />
              <br />
              I HAVE DEVELOP BY 
              <i>
                <b className="purple"> React.js and FIREBASE</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
