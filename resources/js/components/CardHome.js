import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function CardHome() {
    return (
        <div className='container'>
            <Col>
                <Link to={'/play'}>
                    <Card className="CardText">
                        <Card.Img
                            variant="top"
                            height="170px"
                            src="https://dwcm8qfd10mal.cloudfront.net/production/transforms/headerimages/173289/RAM-Hal-Prince-2022_8d172547739020f424f78b7efe4245b5.jpg"
                        />
                        <Card.Body>
                            <Row>
                                <Col xs={10}>
                                    <Card.Title>
                                        Inventing Anna
                                    </Card.Title>
                                    <Card.Text>
                                        Pedro Gonzales, 1998
                                    </Card.Text>
                                </Col>
                                <Col xs={2}>
                                    <BsInfoCircle
                                        style={{ fontSize: "30px" }}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </div>
    )
}
