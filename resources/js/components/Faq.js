import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import {
    Container,
    Accordion,
    Button,
    useAccordionButton,
} from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log("totally custom!")
    );

    return (
        <button type="button" className="faqButton" onClick={decoratedOnClick}>
            {children}
        </button>
    );
}

export default function Faq() {
    return (
        <Container className="p-6">
            <Row>
                <Accordion defaultActiveKey="0">
                    <Card className="faq-bg">
                        <Card.Header className="faq-header">
                            <CustomToggle eventKey="0">
                                <span className="faq-header">
                                    {" "}
                                    What is THEATRIX?
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p className="faqBody">
                                        Testimonials are short quotes from
                                        people who Testimonials are short quotes
                                        from people who love your brand. It's a
                                        great way to convince customers to try
                                        your services.
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="faq-bg">
                        <Card.Header className="faq-header">
                            <CustomToggle eventKey="1">
                                <span className="faq-header">
                                    {" "}
                                    What can I watch on THEATRIX?
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p className="faqBody">
                                        Testimonials are short quotes from
                                        people who love .Testimonials are short
                                        quotes from people who love your brand.
                                        It's a great way to convince customers
                                        to try your services.Testimonials are
                                        short quotes from people who love your
                                        brand. It's a great way to convince
                                        customers to try your services.
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="faq-bg">
                        <Card.Header>
                            <CustomToggle eventKey="2">
                                <span className="faq-header">
                                    What devices are supported?
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p className="faqBody">
                                        Testimonials are short quotes from
                                        people who Testimonials are short quotes
                                        from people who love your brand. It's a
                                        great way to convince customers to try
                                        your services.
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="faq-bg">
                        <Card.Header>
                            <CustomToggle eventKey="3">
                                <span className="faq-header">
                                    How can I upload my own content?
                                </span>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p className="faqBody">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Praesent dictum
                                        scelerisque lacus eu pellentesque.
                                        Suspendisse vitae venenatis nunc. Sed
                                        scelerisque augue vitae sem placerat
                                        condimentum eu in enim. Nulla varius
                                        magna sit amet sapien ornare accumsan
                                        pulvinar dictum magna. Curabitur at dui
                                        ut dui bibendum congue vel at orci.
                                        Fusce quam urna, ullamcorper nec
                                        pellentesque at, efficitur et ipsum.
                                        Praesent justo mauris, consectetur et
                                        consectetur quis, pretium eu felis.
                                        Phasellus faucibus malesuada turpis
                                        volutpat gravida.
                                        <br />
                                        Proin maximus dui quis neque dictum
                                        pharetra. Suspendisse aliquam augue
                                        urna, non fringilla nisl luctus ut.
                                        Etiam ut enim libero. Integer posuere
                                        viverra rutrum. Donec sagittis, neque
                                        quis pretium dapibus, enim urna lacinia
                                        nulla, quis tempus diam orci sit amet
                                        ex. Etiam dapibus dictum sodales. Nulla
                                        facilisi. Nam aliquet quam eu lectus
                                        rhoncus varius. Vestibulum in arcu ac
                                        elit rutrum commodo. Phasellus magna
                                        neque, viverra id nibh sed, rutrum
                                        laoreet nulla.
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
        </Container>
    );
}
