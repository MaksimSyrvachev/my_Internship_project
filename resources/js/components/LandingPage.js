import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navigation from "./Navigation";
import Faq from "./Faq";
import Categories from "./Categories";
import LastContentPublished from "./LastContentPublished";
import Highlights from "./Highlights";
import Artists from "./Artists";
import IsotopeReact from "./IsotopeReact";

export default function LandingPage() {
    return (
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://theatrix.dev/theatrix/public/images/theatrix.png"
                            width="150"
                            height="500"
                            // alt="First slide"
                        />
                        {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
                <hr className="solid"></hr>
                <Col sm={8}>
                    <h3>Highlights (content)</h3>
                    <Highlights />
                    <h3>Last content published</h3>
                    <LastContentPublished />
                    <Row>
                        <div className="d-flex">
                            <h1>Categories</h1>
                            <Navigation />
                        </div>
                        <Categories />
                        <div className="d-flex">
                            <h3>News (articles)</h3>
                            <IsotopeReact />
                        </div>
                    </Row>
                </Col>
                <Col sm={4}>
                    <h3>Artists (content creators)</h3>
                   <Artists />
                </Col>
                <Faq />                
            </Row>
        </Container>
    );
}
