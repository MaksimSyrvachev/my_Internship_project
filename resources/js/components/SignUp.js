import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function SignUp() {
    return (
        <div className="content">
            <Row>
                <Col lg={8} className="signUpDiv">
                    <img src="https://www.timeshighereducation.com/sites/default/files/styles/article785xauto/public/gitis-music-dep-6-use-for-theatre-history_0.jpg?itok=qRSgFH-C" />
                </Col>
                <Col lg={4}>
                    <div className="paymentFormDiv">
                        <Form method="POST" action="/api/users/register" className="CardText" id="signupForm">
                            <Form.Label>Let's get to know you</Form.Label>

                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="input" name="first_name" id="first_name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="input" name="last_name" id="last_name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control type="email" name="email" id="email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" id="password" />
                            </Form.Group>
                        </Form>

                        <Row className="paymentContentRow">
                            <div className="d-grid gap-2">
                                <Button type="submit" form="signupForm" variant="outline-light" size="lg">
                                    Sign up
                                </Button>
                                <Button variant="outline-light" size="lg">
                                    <FcGoogle/> Sign Up With Google
                                </Button>
                                <Button variant="outline-light" size="lg">
                                    <FaFacebook/> Sign Up With Facebook
                                </Button>
                            </div>
                        </Row>
                        <br/>
                        <Link to="/login">
                            Have an Account Already? Login here
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
