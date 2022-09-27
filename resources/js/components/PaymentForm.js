import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function PaymentForm() {
    return (
        <div>
        <div className="paymentFormDiv">
                        <Form>
                            <Form.Group className="mb-3">
                                <h3 className="donationTitle mb-3">Payment Details</h3>
                                <Form.Label>Payment Method</Form.Label>
                                <Form.Select
                                    aria-label="Payment Method"
                                    name="method"
                                >
                                    <option>Credit Card</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Name of the Card Holder</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Card Holder Name"
                                    name="cardHolder"
                                />
                                
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Card Number"
                                    name="passs"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Expiration Date</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Expiration Date"
                                    name="date"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Visual Cryptogram</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Visual Cryptogram"
                                    name="ccv"
                                />
                            </Form.Group>
                            <center>
                                <Button variant="outline-light" type="submit">
                                    Save your card
                                </Button>
                            </center>
                        </Form>
                    </div>
                    </div>
    );
}
