import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456'
              isBlog={false}
              title="Netflix-Clone"
              description="Netflix Clone Using React Js and Firebase..."
              ghLink="https://github.com/12akhil/simtask-2"
              demoLink="https://simtask-2.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=2000'
              isBlog={false}
              title="HotelTips"
              description="Room booking website at affordable price..."
              ghLink="https://github.com/12akhil/digibheem"
              demoLink="https://hoteltips.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://img.freepik.com/premium-vector/fast-food-logo-designs-template-food-delivery-logo-symbol_7649-3997.jpg?w=2000'
              isBlog={false}
              title="Quickfood "
              description="Quickfood is an online food-delivery website. why dont you have a look?"
              ghLink="https://github.com/12akhil/simtask"
              demoLink="https://quick2food.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://static.vecteezy.com/system/resources/previews/004/229/128/original/calculator-icon-logo-free-vector.jpg'
              isBlog={false}
              title="Simple Calculator"
              description="That can perform basic operations..."
              ghLink="https://github.com/12akhil/technohacks_task_1"
              demoLink="https://github.com/12akhil/technohacks_task_1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VVSABwNZMafFYIWapYQVHHqS3sPTso1H1g&usqp=CAU'
              isBlog={false}
              title="Currency Converter"
              description="That can convert money in different currency..."
              ghLink="https://github.com/12akhil/technohacks_task_2"
              demoLink="https://technohacksconverter.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://us.123rf.com/450wm/djvstock/djvstock2006/djvstock200624689/149007717-clock-instrument-design-time-tool-watch-second-deadline-measure-countdown-and-object-theme-vector.jpg?ver=6'
              isBlog={false}
              title="Converter"
              description="Simple CountdownClock and have same basic featuress..."
              ghLink="https://github.com/12akhil/technohacks_task_3"
              demoLink="https://countdowntimer2.netlify.app"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
