import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function GeneralCard({post}) {
    // If post property exists it will be used to display all post details
    return (
        <div className="d-flex justify-content-between">
            <Container fluid>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4 generalCardRow">
                    <div className="cardDiv">
                        <Col>
                            <Card className="CardText">
                                <Row>
                                    <Card.Img
                                        variant="top"
                                        src={post ? post?.foto : null}
                                    />
                                </Row>
                                <Card.Body>
                                    <Row className="cardFont">
                                        <Card.Title>
                                            <a href="#">{post ? post?.title : null}</a>
                                        </Card.Title>
                                        <Card.Text>
                                            {post ? post?.description : null}
                                        </Card.Text>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
