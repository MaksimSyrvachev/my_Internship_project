import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BsBell, BsPersonCircle } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import SearchForm from "./SearchForm";
import logo from "../../../public/images/theatrix.png";

function NavigationDesktop() {
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
            expand="md"
            collapseOnSelect
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
                        className="brandStyle"
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

                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="d-flex align-content-end align-items-end flex-wrap mt-4"
                >
                    <Nav className="me-auto ">
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

                        <Nav.Link as={Link} eventKey="5" to="/register">
                            <Nav className="navStyle">Register</Nav>
                        </Nav.Link>
                        <Nav.Link as={Link} eventKey="6" to="/faq">
                            <Nav className="navStyle">Faq</Nav>
                        </Nav.Link>
                    </Nav>
                    <Nav className="d-flex align-items-end">
                        <Button
                            href="/verifyId"
                            variant="outline-light"
                            className="navButtonRadius"
                            size="md"
                        >
                            View as Creator
                        </Button>
                    </Nav>

                    <SearchForm
                        params={params}
                        onParamChange={handleParamChange}
                    />
                    <div className="d-flex flex-row order-2">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <BsBell style={{ color: "white" }} size="30" />
                            </li>
                            <li className="nav-item">
                                <span>
                                    <Link to={"/profile"} eventKey="7">
                                        <BsPersonCircle
                                            style={{ color: "white" }}
                                            size="30"
                                        />
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationDesktop;
