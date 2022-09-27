import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaHandsWash } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BsReply } from "react-icons/bs";
import GeneralCard from "./GeneralCard";
import ThreeDotsMenu from "./ThreeDotsMenu";

export default function PlayPage() {
    return (
        <Container>
            <Row>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="title">Space for the title of the play here</h1>
                    <Button variant="outline-light">$5.00</Button>
                </div>
            </Row>
            <Row className="d-flex justify-content-between align-items-center">
                <Col md="6">
                    <video controls>
                        <source src="movie.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
                <Col md="6">
                    <h2 className="text-nowrap">By John Doe</h2>
                    <div className="interactions d-flex justify-content-around">
                        <span className="playerIcons">
                            <FaHandsWash size="40" /> 122
                        </span>
                        <span className="playerIcons">
                            <BsSuitHeart size="40" /> 321
                        </span>
                        <span className="playerIcons">
                            <a href="#jump-to-comments">
                                <FaRegComment size="40" /> 123
                            </a>
                        </span>
                    </div>
                    <p class="description">
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                        rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                        possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                        voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                        tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                        consequatur aut perferendis doloribus asperiores repellat."
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <h3 className="suggestions">Suggestions for you</h3>
                    <GeneralCard count="4" />
                </div>
            </Row>
            <Row>
                <h1 id="jump-to-comments">Comments</h1>
                <hr></hr>
                <div className="commentSection">
                    <div className="d-flex justify-content-start align-items-center">
                        <img src="https://via.placeholder.com/150" width="50" height="50" className="rounded-circle"></img>
                        <p className="userName">John Doe</p>
                        <ThreeDotsMenu />
                    </div>
                    <div className="userComment">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                            officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                        <div className="d-flex justify-content-start">
                            <span className="commentActions">
                                <BsSuitHeart size="22" /> 5
                            </span>
                            <span className="commentActions">
                                <BsReply size="22" /> Reply
                            </span>
                        </div>
                        <div>
                            <div className="d-flex justify-content-start align-items-center">
                                <img src="https://via.placeholder.com/150" width="50" height="50" className="rounded-circle"></img>
                                <p className="userName">John Doe</p>
                                <ThreeDotsMenu />
                            </div>
                            <div className="userComment">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                    officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                </p>
                                <div className="d-flex justify-content-start">
                                    <span className="commentActions">
                                        <BsSuitHeart size="22" /> 5
                                    </span>
                                    <span className="commentActions">
                                        <BsReply size="22" /> Reply
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-start align-items-center">
                        <img src="https://via.placeholder.com/150" width="50" height="50" className="rounded-circle"></img>
                        <p className="userName">John Doe</p>
                        <ThreeDotsMenu />
                    </div>
                    <div className="userComment">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                            officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                        <div className="d-flex justify-content-start">
                            <span className="commentActions">
                                <BsSuitHeart size="22" /> 5
                            </span>
                            <span className="commentActions">
                                <BsReply size="22" /> Reply
                            </span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-start align-items-center">
                        <img src="https://via.placeholder.com/150" width="50" height="50" className="rounded-circle"></img>
                        <p className="userName">John Doe</p>
                        <ThreeDotsMenu />
                    </div>
                    <div className="userComment">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                            officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                        <div className="d-flex justify-content-start">
                            <span className="commentActions">
                                <BsSuitHeart size="22" /> 5
                            </span>
                            <span className="commentActions">
                                <BsReply size="22" /> Reply
                            </span>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
}
