import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a className="project-link" href={gitLink} target="_blank" rel="noreferrer"><span>{description}</span></a>
        </div>
      </div>
    </Col>
  )
}
