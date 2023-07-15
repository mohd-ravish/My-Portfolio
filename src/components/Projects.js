import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-2.png";
import projImg3 from "../assets/img/project-3.png";
import projImg4 from "../assets/img/project-4.png";
import projImg5 from "../assets/img/project-5.png";
import projImg6 from "../assets/img/project-6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Hostel Management",
      description: "The Hostel Management website provides a user-friendly interface for both hostel administrators and students",
      imgUrl: projImg1,
      gitLink: "https://github.com/mohd-ravish/Hostel-Management",
    },
    {
      title: "Note Vault",
      description: "The online platform for securely storing and organizing your important notes. Powered by React and backend by a MySQL database",
      imgUrl: projImg2,
      gitLink: "https://github.com/mohd-ravish/Note-Vault",
    },
    {
      title: "User Hub",
      description: "User Hub, a user management website designed to manage users and their data. Built with React and powered by MongoDB.",
      imgUrl: projImg3,
      gitLink: "https://github.com/mohd-ravish/User-Hub",
    }
  ];

  const projects2 = [
    {
      title: "Chat Verse",
      description: "A group chat built with React that allows multiple users to communicate with each other simultaneously.",
      imgUrl: projImg4,
      gitLink: "https://github.com/mohd-ravish/Chat-Verse",
    },
    {
      title: "Check It",
      description: "Check-It is a powerful and intuitive to-do list app built with React",
      imgUrl: projImg5,
      gitLink: "https://github.com/mohd-ravish/Check-It",
    },
    {
      title: "Charity",
      description: "Blood Donation website home page using html and css",
      imgUrl: projImg6,
      gitLink: "https://github.com/mohd-ravish/Blood-Donation",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bgimg-right"></img>
    </section>
  )
}
