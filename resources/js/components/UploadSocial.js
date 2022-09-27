import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { BsPencilSquare,BsCardImage,BsCloudUpload} from "react-icons/bs";

export default function UploadSocial() {
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

            <Container className="p-5 p-1-xs">
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        {" "}
                        <BsPencilSquare size="20" /><span> &nbsp; </span>
                        Share any news with the viewers{" "}
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Any News..."
                        name="news"
                        className="textareas"
                    />
                </Form.Group>

                <br/>
                <BsCardImage size="30"  />
                    <span> &nbsp; </span>Share any news with the viewers ...
                <div
                    className="uploadDivs d-flex justify-content-center align-items-center p-4"
                    role="button"
                    onClick={handleClick}
                >
                    <BsCloudUpload size="40" className="me-2"/> Choose a file
                </div>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    name="video"
                    style={{ display: "none" }}
                />


                <span className="d-flex justify-content-center mt-3">
                    <Button variant="outline-light" type="submit">
                        Share
                    </Button>
                </span>
            </Form>
            </Container>

    );
}
