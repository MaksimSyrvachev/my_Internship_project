import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../public/images/theatrix.png";

function NavigationMobile() {
    const [params, setParams] = useState({});
    const [expanded, setExpanded] = useState(false);

    function overrideToggle() {
        console.log("TOGGLE TRIGGERED...");
        setExpanded((prevExpanded) => !prevExpanded);
    }
    function handleParamChange(e) {
        const param = e.target.name;
        const value = e.target.value;
        setParams((prevParams) => {
            return { ...prevParams, [param]: value };
        });
    }

    return (
        <Navbar
            expand={false}
            className="d-flex justify-content-between navbar-custom navbarbg"
            expanded={expanded}
            onToggle={overrideToggle}
        >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <HiMenu style={{ color: "white" }} size="40" />
                </Navbar.Toggle>
                <Navbar.Brand>
                    <Nav.Link
                        as={Link}
                        eventKey="0"
                        className="brandStyle mx-auto"
                        to="/"
                    >
                        <img
                            src={logo}
                            width="100"
                            height="90"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Nav.Link>
                </Navbar.Brand>

                <div className="d-flex flex-row order-2">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <BsSearch style={{ color: "white" }} size="30" />
                        </li>
                        <li className="nav-item">
                            <BsPersonCircle
                                style={{ color: "white" }}
                                size="30"
                            />
                        </li>
                    </ul>
                </div>
                <Navbar.Offcanvas
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    className="OffcanvasBg"
                >
                    <div className="text-center">
                        <Offcanvas.Header closeButton>
                            <img
                                src={logo}
                                width="100"
                                height="90"
                                className="d-block mx-auto"
                                alt="Logo"
                            />

                            <AiOutlineClose size="30" />

                            {/*<Button variant="outline-light" aria-label="Close">x</Button>*/}
                        </Offcanvas.Header>
                    </div>
                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} eventKey="1" to="/">
                                <Nav className="navStyle">Home</Nav>
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey="2" to="/donation">
                                <Nav className="navStyle">Donation</Nav>
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey="3" to="/about">
                                <Nav className="navStyle">About us</Nav>
                            </Nav.Link>
                            {!localStorage.getItem("user") ? (
                                <Nav.Link as={Link} eventKey="4" to="/login">
                                    <Nav className="navStyle">Login</Nav>
                                </Nav.Link>
                            ) : (
                                <Nav.Link as={Link} eventKey="4" to="/logout">
                                    <Nav className="navStyle">Logout</Nav>
                                </Nav.Link>
                            )}
                        </Nav>
                        <Nav className="d-flex align-items-center">
                            <Button
                                variant="outline-light"
                                className="navButtonRadius"
                                size="md"
                            >
                                View as Creator
                            </Button>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavigationMobile;
