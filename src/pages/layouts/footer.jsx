import { Container, Row, Col } from "react-bootstrap";
import { FaCopyright, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";

export default function Footer()
{
    return <>
        <div style={{ background: "linear-gradient(259.13deg, #6601A9 4.86%, #8403A2 111.66%)"}}>
            <Container className="py-5">
                <Row className="align-items-center justify-content-between text-light" style={{minHeight: "50vh" }}>
                    <Col md={3} className="mb-5 text-center text-lg-start">
                        <h3>ERP</h3>
                        
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                        </p>
                    </Col>

                    <Col md={3} className="mb-5 text-center text-lg-start">
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <FaPhone className="me-3"/> 0123456789
                            </li>

                            <li className="mb-3">
                                <FaEnvelope className="me-3"/> erp@gmail.com
                            </li>

                            <li className="mb-3">
                                <FaGlobe className="me-3"/> www.erp.com
                            </li>
                        </ul>
                    </Col>

                    <Col md={3} className="mb-5 text-center text-lg-start">
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a href="/" className="text-decoration-none text-light"><b>About Us</b></a>
                            </li>
                            <li className="mb-3">
                                <a href="/" className="text-decoration-none text-light"><b>Contact Us</b></a>
                            </li>
                            <li className="mb-3">
                                <a href="/" className="text-decoration-none text-light"><b>Privacy Policy</b></a>
                            </li>
                            <li className="mb-3">
                                <a href="/" className="text-decoration-none text-light"><b>Terms & Conditions</b></a>
                            </li>
                        </ul>
                    </Col>

                    <Col xs="{12}" className="text-center align-items-center">
                        <FaCopyright/> 2023 - <a href="http://codecell.com.bd/" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">Codecell Limited</a>. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}