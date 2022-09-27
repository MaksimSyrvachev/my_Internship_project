import React from "react";
import {Row, Col, Card } from "react-bootstrap";

// Request content for this from content writers in the future
export default function AboutUs() {
    return (
        <div className="container">
            <h1>Who are we?</h1>
            <div className="aboutInfo">
                <h2>The project</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum
                </p>
            </div>
            <div className="aboutInfo">
                <h2>Our vision</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum
                </p>
            </div>
            <div className="aboutInfo">
                <h2>Our mission</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum
                </p>
            </div>
            <div className="team">
                <h2>The team</h2>
                <Row>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img variant="top" src="holder.js/300px200"/>
                            <Card.Title className="teamMemberName">John Doe</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img variant="top" src="holder.js/300px200"/>
                            <Card.Title className="teamMemberName">John Doe</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img variant="top" src="holder.js/300px200"/>
                            <Card.Title className="teamMemberName">John Doe</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img variant="top" src="holder.js/300px200"/>
                            <Card.Title className="teamMemberName">John Doe</Card.Title>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}