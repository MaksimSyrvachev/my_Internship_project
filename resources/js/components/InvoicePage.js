import React, { useState, PureComponent } from "react";
import Card from "react-bootstrap/Card";
import { Container, Tabs, Tab } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowUp } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import UploadContent from "./UploadContent";
import UploadSocial from "./UploadSocial";
import UploadPoll from "./UploadPoll";
import UploadStory from "./UploadStory";
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../../../public/images/frame.png";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import DashboardCards from "./DashboardCards";

export default function InvoicePage() {
    const [key, setKey] = useState("play");
    

    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <Container fluid className="p-5">
            <Row>
                <Container className="d-flex justify-content-around flex-wrap flex-lg-nowrap">
                <DashboardCards />
                <DashboardCards
                    title="Earning"
                    mainText="$ 531,12"
                    percent="5.7"
                />
                <DashboardCards title="Sales" mainText="236" percent="9.3" />
                <DashboardCards
                    title="Performance"
                    mainText="32%"
                    percent="15.1"
                />
                <DashboardCards />
                </Container>
            </Row>
            <Row>
                <br/> <br/>
            </Row>
            <Row>
                <Col sm={7}>
                    <h3>Sales</h3>
                    <br />
                    <ResponsiveContainer width="95%" height="75%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#deeb34"
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
                <Col sm={5}>
                    <h3>Activities</h3>
                    <br />
                    <ListGroup variant="flush">
                        <ListGroup.Item className="OffcanvasBg">
                            <img
                                src={logo}
                                height="35"
                                className="rounded-circle"
                            />
                            <span className="ps-2">
                                Furkan Jackson Followed You
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item className="OffcanvasBg">
                            <img
                                src={logo}
                                height="35"
                                className="rounded-circle"
                            />
                            <span className="ps-2">Ada Smith Followed You</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="OffcanvasBg">
                            <img
                                src={logo}
                                height="35"
                                className="rounded-circle"
                            />
                            <span className="ps-2">
                                Cihad Gagarin Followed You
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item className="OffcanvasBg">
                            <img
                                src={logo}
                                height="35"
                                className="rounded-circle"
                            />
                            <span className="ps-2">
                                Thijs Gallo Followed You
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item className="OffcanvasBg">
                            <img
                                src={logo}
                                height="35"
                                className="rounded-circle"
                            />
                            <span className="ps-2">
                                Krist Davay Followed You
                            </span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
<br/><br/>
            <Tabs
                defaultActiveKey="play"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="m-3 nav-fill dashboardColor"                
                transition={false}
            >
                <Tab eventKey="play" title="New Play" >
                    <UploadContent />
                </Tab>
                <Tab eventKey="post" title="New Post">
                    <UploadSocial />
                </Tab>
                <Tab eventKey="poll" title="New Poll">
                    <UploadPoll />
                </Tab>
                <Tab eventKey="story" title="New Story">
                    <UploadStory />
                </Tab>
            </Tabs>

           {/* <Row>
                <Row>
                    <h3>Invoice History</h3>
                    <span>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <h5 className="d-flex justify-content-center">
                                Random Text but listed
                            </h5>
                        ))}
                    </span>
                    <span className="d-flex justify-content-center">
                        <Button variant="outline-light">See more</Button>
                    </span>
                </Row>
                <Row>
                    <h3>Sales History</h3>
                    <span>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <h5 className="d-flex justify-content-center">
                                Random Text but listed
                            </h5>
                        ))}
                    </span>
                    <span className="d-flex justify-content-center">
                        <Button variant="outline-light">See more</Button>
                    </span>
                </Row>
                <Row>
                    <h3>Donation History</h3>
                    <span>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <h5 className="d-flex justify-content-center">
                                Random Text but listed
                            </h5>
                        ))}
                    </span>
                    <span className="d-flex justify-content-center">
                        <Button variant="outline-light">See more</Button>
                    </span>
                </Row>
            </Row>*/}
        </Container>
    );
}
