import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  var date = new Date();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4}>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/mohdravish" target="_blank"  rel="noreferrer"><img src={navIcon1} alt="linkedin" /></a>
              {/* <a href="#"><img src={navIcon2} alt="" /></a> */}
              <a href="https://instagram.com/rrravishh" target="_blank"  rel="noreferrer"><img src={navIcon3} alt="instagram" /></a>
            </div>
            <p>Copyright ⓒ {date.getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
