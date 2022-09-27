import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Artists() {
    return (
        <div className="contatiner">
            <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="http://via.placeholder.com/300" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below
                                    as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                ))}
            </Row>
        </div>
    );
}
