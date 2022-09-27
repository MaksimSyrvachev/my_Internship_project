import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PaymentForm from "./PaymentForm";

export default function Payment() {
    return (
        <div className="deneme">
            <Row xs={1} md={2}>
                <Col xs={{ order: 'last' }} md={{order: 'first' }}>
                    <PaymentForm />
                </Col>
                <Col xs={{ order: 'first' }} md={{order: 'last'}}>
                    <Container>
                        <div className="paymentContentDiv CardText">
                            <span className="homePageFont">
                                <a>Kimora Rodgers</a>
                            </span>
                            <p>Pedro Gonzales, 1998</p>
                            <img
                                variant="top"
                                src="https://dwcm8qfd10mal.cloudfront.net/production/transforms/headerimages/173289/RAM-Hal-Prince-2022_8d172547739020f424f78b7efe4245b5.jpg"
                            />
                            <Row className="paymentContentRow">
                                <Col xs={5} lg={6}>
                                    <span>99</span> <span>min</span>{" "}
                                    <div className="vr" /> <span>2017</span>{" "}
                                    <div className="vr" /> <span>Dance</span>
                                </Col>
                                <Col xs={7} lg={6}>
                                    <Button
                                        variant="outline-light"
                                        className="paymentContentButton"
                                    >
                                        5.00$
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="paymentContentRow">
                                <Col xs={9}>
                                    <p>
                                        This play will be available for 30 days.
                                        Once you press Play, you will have 48
                                        hours to watch it (as many times as you
                                        want).
                                    </p>
                                </Col>
                            </Row>
                            <Row className="paymentContentRow">
                                <Col xs={9}>
                                    <div className="mb-2 footerContainer">
                                        <Button
                                            variant="outline-light"
                                            size="md"
                                        >
                                            Rent Now
                                        </Button>{" "}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Col>
            </Row>
        </div>
    );
}
