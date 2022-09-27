import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PaymentForm from "./PaymentForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function DonationPage() {
    return (
        <Container style={{color:"white"}} className="d-flex">
            <Row>
            <Col lg={8}>
                <div>
                    <Row>
                        <h3 className="donationTitle">Empower Artists and Content Creators!</h3>
                        <br />
                        <p>
                            We are supporting new artists to improve and create
                            a community. But we can't get there without you!
                        </p>
                    </Row>
                    <Row>
                        <h3 className="donationTitle">Learn more about your favorite artist</h3>
                        <div>
                            <img
                                height="100px"
                                src="http://theatrix.dev/theatrix/public/images/theatrix2.png"
                            ></img>
                            <br />
                            <p className="ms-2">
                                Leonardo Wilhelm DiCaprio is an American actor
                                and film producer. Known for his work in biopics
                                and period films, DiCaprio is the recipient of
                                numerous ...
                            </p>
                            <br />
                            <div className="d-flex justify-content-center">
                                <Form style={{ color: "white" }}>
                                    {["radio"].map((type) => (
                                        <div
                                            key={`inline-${type}`}
                                            className="mb-3"
                                        >
                                            <Form.Check
                                                inline
                                                label="One Time"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Monthly"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Row xs={2} sm={3} >
                                {Array.from({ length: 6 }).map((_, idx) => (
                                    <div className="d-flex mt-3 justify-content-center">
                                        <Button variant="outline-light">
                                            5.00 $
                                        </Button>
                                        &nbsp;
                                    </div>
                                ))}
                                </Row>
                            </div>
                            <div className="mb-4 mt-4 d-flex justify-content-around">
                                <p>Other Amounts: <Button variant="outline-light">---- $</Button></p>
                            </div>
                            <div className="d-flex justify-content-center mb-5">
                                <Button variant="outline-light">Donate Now!</Button>
                            </div>
                        </div>
                    </Row>
                </div>
            </Col>
            <Col lg={4}>
                <PaymentForm />
            </Col>
            </Row>
        </Container>
    );
}
