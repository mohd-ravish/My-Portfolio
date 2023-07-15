import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {

  const [details, setDetails] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_message: ""
  })

  const inputDetails = (event) => {
    setDetails(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }

  const form = useRef();

  const sendData = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ule8lq9', 'template_eqlq5ln', form.current, 'P5FUB0tWg6-xdDyJs')
      .then(setDetails({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_message: ""
      }))
    console.log(details)
    toast.success("Sent!", {
      position: toast.POSITION.TOP_CENTER
    })
  };

  return (
    <section className="contact" id="connect">
      <ToastContainer />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendData}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input type="text" placeholder="Full Name" name="user_name"  value={details.user_name} onChange={inputDetails} autoComplete="off" required />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col> */}
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" name="user_email"  value={details.user_email} onChange={inputDetails} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." name="user_phone"  value={details.user_phone} onChange={inputDetails} autoComplete="off" required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name="user_message"  value={details.user_message} onChange={inputDetails} required></textarea>
                        <button type="submit"><span>Send</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
