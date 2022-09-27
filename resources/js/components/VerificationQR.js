import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

export default function VerificationQR() {
    return (
        <div className="deneme">
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>Let's get you verified!</h4><br/>
                        <p>
                        Step 1 : Connect the camera of your phone to be able to upload of the necessary documents !</p>
                        <p>Step 2: Take your phone and scan with your camera the following QR Code 
                        </p> 
                    </Col>
                    <Col md={4}>
                        <br/>
                    </Col>
                    <Col md={4}>
                        <div className="verificationQr">
                            <h5>Scan Your QR Code</h5><br/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/QR-code-obituary.svg/768px-QR-code-obituary.svg.png"/>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
          
        </div>
    );
}
