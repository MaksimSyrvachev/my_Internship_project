import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="test">
            <Container fluid className="footerContainer">
                <Row className="footerContainerRow">
                    <span className="footerFont">Contact us now!</span>
                </Row>

                <Row className="footerContainerRow">
                    <Stack direction="horizontal" gap={3} className="footerContainer">
                        <a href="https://www.facebook.com/extramus.eu/" target="_blank">                            
                            <FaFacebookF className="footerIcon" />
                        </a>
                        <a href="https://www.instagram.com/extramus.eu/" target="_blank">
                            <FaInstagram className="footerIcon" />
                        </a>
                        <a href="https://www.linkedin.com/company/extramus-italy" target="_blank">
                            <FaLinkedin className="footerIcon" />
                        </a>
                    </Stack>
                </Row>

                {/* Update this in the future */}
                <Row className="footerContainerRow">
                    <ul>
                        <li className="lastLi">
                            <a href="#">Privacy</a>{" "}
                        </li>

                        <li className="lastLi">
                            <a href="#">Cookies</a>
                        </li>

                        <li className="lastLi">
                            <a href="#">Help Center</a>
                        </li>

                        <li className="lastLi">
                            <a href="#">Legal</a>
                        </li>

                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                    </ul>
                </Row>
            </Container>
        </div>
    );
}
