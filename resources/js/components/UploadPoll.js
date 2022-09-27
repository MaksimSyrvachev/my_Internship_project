import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { BsPencilSquare,BsBlockquoteRight,BsCloudUpload} from "react-icons/bs";

export default function UploadPoll() {
   

    return (
        <Container className="p-5 p-1-xs">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        {" "}
                        <BsPencilSquare size="20" /><span> &nbsp; </span>
                        Ask some questions to the viewers :{" "}
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Ask the Question.."
                        name="news"
                        className="textareas"
                    />
                </Form.Group>

                <br/>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> <BsBlockquoteRight size="20"/> Option 1</Form.Label>
                    <Form.Control
                        type="text"
                        
                        name="option1"
                        className="textareas"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> <BsBlockquoteRight size="20"/> Option 2</Form.Label>
                    <Form.Control
                        type="text"
                        
                        name="option2"
                        className="textareas"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> <BsBlockquoteRight size="20"/> Option 3</Form.Label>
                    <Form.Control
                        type="text"
                       
                        name="option3"
                        className="textareas"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> <BsBlockquoteRight size="20"/> Option 4</Form.Label>
                    <Form.Control
                        type="text"
                        
                        name="option4"
                        className="textareas"
                    />
                </Form.Group>

                <span className="d-flex justify-content-center">
                    <Button variant="outline-light" type="submit">
                        Share
                    </Button>
                </span>
            </Form>
        </Container>
    );
}
