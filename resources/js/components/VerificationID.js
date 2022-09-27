import React, {useState}  from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsUpload } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function VerificationID() {
    const hiddenFileInput = React.useRef(null);
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
    };
    return (
        <div className="deneme">
            <Container>
                <h4>Let's get you verified!</h4>
                <Row>
                    <Col md={6} className="py-3 px-md-5">
                        Upload the front of your ID
                        <div
                            className="verificationIdDivs d-flex justify-content-center align-items-center"
                            role="button"
                            onClick={handleClick}
                        >
                            <BsUpload size="50" />
                        </div>
                    </Col>

                    <Col md={6} className="py-3 px-md-5">
                        Upload the Back of your ID
                        <div
                            className="verificationIdDivs d-flex justify-content-center align-items-center"
                            role="button"
                            onClick={handleClick}
                        >
                            <BsUpload size="50" />
                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="py-3 px-md-5">
                        Selfie with ID
                        <div
                            className="verificationIdDivs d-flex justify-content-center align-items-center"
                            role="button"
                            onClick={handleClick}
                        >
                            <BsUpload size="50" />
                        </div>
                    </Col>

                    <Col md={6} className="py-3 px-md-5">
                        Verify your number
                        <div className="verificationIdDivs d-flex justify-content-center align-items-center">
                            <Form className="CardText">
                                <Form.Group>
                                    <Row className="mb-3">
                                        <Col sm={8}>
                                            <Form.Control
                                                type="input"
                                                name="message"
                                                placeholder="Enter your number"
                                            />
                                        </Col>
                                        <Col sm={4}>
                                            <Button variant="outline-light">
                                                Send
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group>
                                    <Row className="mb-3">
                                        <Col sm={8}>
                                            <Form.Control
                                                type="input"
                                                name="message"
                                                placeholder="Enter the Code"
                                            />
                                        </Col>
                                        <Col sm={4}>
                                            <Button variant="outline-light">
                                                Verify
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Text className="text-muted">
                                    <a href="#">Resend the code</a>
                                </Form.Text>
                            </Form>
                            <br />
                            <br />
                        </div>
                    </Col>
                </Row>
            </Container>
            <input
                                type="file"
                                ref={hiddenFileInput}
                                onChange={handleChange}
                                style={{ display: "none" }}
                            />
                            {isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
        </div>
    );
}
