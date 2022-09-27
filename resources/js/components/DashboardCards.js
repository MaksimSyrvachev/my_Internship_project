import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Tabs, Tab } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowUp } from "react-icons/bs";

export default function DashboardCards(props) {
    return (
        <div className="m-3 p-3 dashboardCards">
            <Col>
                <Card className="CardText">
                    <Card.Body>
                        <Row className="cardFont">
                            <Card.Title>
                                <a>{props.title}</a>
                            </Card.Title>
                            <Card.Text>
                                <h3>{props.mainText}</h3>
                            </Card.Text>
                        </Row>
                        <Row>
                            <div className="mt-3 d-flex justify-content-between">
                                <BsArrowUp color="green" size={30} />
                                <p>
                                    <b>{props.percent}%</b> Since last month
                                </p>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}
DashboardCards.defaultProps = {
    title: "Traffic",
    mainText: "131,92",
    percent: "3.2",
};
