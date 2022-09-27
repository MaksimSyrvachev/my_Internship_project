import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineUserAdd } from "react-icons/ai";
import GeneralCard from "./GeneralCard";

export default function Subscriptions() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: "18rem" }}>
                        <div className="d-flex">
                            <Col>
                                <div className="subs-card">
                                    <img
                                        src="http://theatrix.dev/theatrix/public/images/theatrix2.png"
                                        height="100px"
                                        width="100px"
                                        alt="draft"
                                    ></img>
                                </div>
                            </Col>
                            <Col>
                                <Card.Title>Kimora Rodgers</Card.Title>
                                <Card.Body>
                                    Testimonials are short quotes from people
                                    who love your brand. It's a great way to
                                    convince customers to try your
                                    services.Testimonials are short quotes from
                                    people who love your brand. It's a great way
                                    to convince customers to try your services.
                                </Card.Body>
                            </Col>
                        </div>
                        <div className="d-flex justify-content-center">
                            <AiOutlineUserAdd
                                style={{ height: "50px", width: "50px" }}
                            />
                            <Button variant="dark" size="sm">
                                Follow
                            </Button>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Row style={{ color: "white" }}>
                        <Col>8 Posts</Col>
                        <Col>52 Followers</Col>
                        <Col>150 Followings</Col>
                    </Row>
                    <Row>
                        <p
                            className="d-flex justify-content-center mt-5"
                            style={{ color: "white" }}
                        >
                            Support your favorite artists..
                        </p>
                    </Row>
                    <Row>
                        <span className="d-flex justify-content-center">
                            <Button variant="light" size="sm">
                                DONATE
                            </Button>
                        </span>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Suggested by This Actor</p>
                    <GeneralCard count={2} />
                </Col>
                <Col>
                    <p>Latest Content</p>
                    <GeneralCard count={2} />
                </Col>
            </Row>
        </Container>
    );
}
