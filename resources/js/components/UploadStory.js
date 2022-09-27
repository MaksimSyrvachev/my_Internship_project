import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { BsCameraReels, BsCloudUpload } from "react-icons/bs";

export default function UploadStory() {
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
        <div>
            <span className="text-center">
                <h4>Upload a Story</h4>
            </span>

            <Container className="d-flex justify-content-center align-items-center p-2">
                <Form>
                    <div className="uploadStory d-flex justify-content-center align-items-center  p-4">
                        <Col  className="text-center">
                            <BsCameraReels size="35" />
                            <br />
                            <p>Record</p>
                        </Col>
                        <Col  className="text-center">
                            <BsCloudUpload
                                size="35"
                                role="button"
                                onClick={handleClick}
                            />
                            <p>Upload</p>
                        </Col>
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
        </div>
    );
}
