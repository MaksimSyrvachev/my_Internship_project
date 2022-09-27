import React, { useState, useRef, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

// LOGIN_URL contains the backend route we want to make an HTTP request to
import axios from "axios";
const LOGIN_URL = "/api/users/login";

const Login = () => {
    // States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toHome, setToHome] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const {setUser} = useContext(UserContext);

    const navigate = useNavigate();

    // For focus on user when doing inputs
    const userRef = useRef();
    const errRef = useRef();

    // After successful login navigate to homepage
    useEffect(() => {
        if (toHome === true) {
            setUser(localStorage.getItem("user"));
            navigate("/");
        }
    }, [toHome]);

    // Put focus on email input when navigating to /login
    useEffect(() => {
        if (!localStorage.getItem("user")) userRef.current.focus();
    }, []);

    // Reset error message after successful Login
    useEffect(() => {
        if (!localStorage.getItem("user")) setErrMsg("");
    }, [email, password]);


    // Handle the data that was submitted through the form inputs
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userInput = { email, password };

        // Post the entered input data into backend for validation
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );

            console.log(JSON.stringify(response?.data));

            // Will be important for security stuff later
            const accessToken = response?.data?.accessToken;

            // Store in local storage of browser
            localStorage.setItem("user", JSON.stringify(response?.data));

            // Set States
            setEmail("");
            setPassword("");
            setToHome(true);
        } catch (err) {
            // If anything goes wrong or the user does not match any entry in database
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 422) {
                setErrMsg("Invalid Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login failed");
            }
            errRef.current.focus();
        }
    };

    // If user is not logged in then show the Login Form
    if (!JSON.parse(localStorage.getItem("user"))) {
        return (
            <div className="content">
                <Row>
                    <Col lg={8} className="signUpDiv">
                        <img src="https://www.timeshighereducation.com/sites/default/files/styles/article785xauto/public/gitis-music-dep-6-use-for-theatre-history_0.jpg?itok=qRSgFH-C" />
                    </Col>
                    <Col lg={4}>
                        <div className="paymentFormDiv">
                            <p
                                ref={errRef}
                                className={errMsg ? "errmsg" : "offscreen"}
                                aria-live="assertive"
                            >
                                {errMsg}
                            </p>
                            <Form
                                onSubmit={handleSubmit}
                                id="loginForm"
                                className="CardText"
                            >
                                <Form.Label>Welcome back</Form.Label>

                                <Form.Group className="mb-3">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        ref={userRef}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />
                                </Form.Group>
                            </Form>

                            <a href="#">Forgot your password?</a>

                            <Row className="paymentContentRow">
                                <div className="d-grid gap-2">
                                    <Button
                                        type="submit"
                                        form="loginForm"
                                        variant="outline-light"
                                        size="lg"
                                    >
                                        Log In
                                    </Button>
                                    <Button variant="outline-light" size="lg">
                                        <FcGoogle /> Sign In With Google
                                    </Button>
                                    <Button variant="outline-light" size="lg">
                                        <FaFacebook /> Sign In With Facebook
                                    </Button>
                                </div>
                            </Row>
                            <br />
                            <Link to="/register">
                                Don't have an account yet? Sign up now!
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    // If user is logged in
    return (
        <div>
            <p>Already logged in.</p>
            <Link to="/logout">Want to log out? Click here!</Link>
        </div>
    );
};

export default Login;
