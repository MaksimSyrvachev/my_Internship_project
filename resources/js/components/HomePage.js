import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { BsInfoCircle } from "react-icons/bs";
import CardHome from "./CardHome";

export default function HomePage() {
    return (
        <>
        {(localStorage.getItem("user")) ? (
        <div className="deneme">
            <div>
                <Container fluid="md">
                    <span className="homePageFont">
                        Hi {JSON.parse(localStorage.getItem("user"))?.data?.first_name},
                        <br />
                        Welcome back to{" "}
                        <a style={{ color: "yellow" }}>Theatrix</a>; here is
                        what you missed...
                    </span>
                </Container>
            </div>
            <br />
            <br />
            <div>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <span className="homePageFont">
                                Continue Watching
                                
                            </span>
                        </Col>
                    </Row>
                    <Row xs={1} sm={2} lg={3} className="g-4">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <CardHome />
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    ) : (
        <Container fluid="md">
                    <span className="homePageFont">
                        Login to see your content
                    </span>
        </Container>
    )}
    </>
    );
}
