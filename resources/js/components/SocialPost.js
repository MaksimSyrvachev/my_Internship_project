import React from "react";
import { Container } from "react-bootstrap";
import { BsThreeDotsVertical, BsSuitHeart, BsReply } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import ThreeDotsMenu from "./ThreeDotsMenu";

export default function SocialPost() {
    return (
        <Container>
            <div className="commentSection">
                <div className="d-flex justify-content-start align-items-center">
                    <img src="https://via.placeholder.com/150" width="50" height="50" className="rounded-circle"></img>
                    <p className="userName">John Doe</p>
                    <GoVerified size="20" />
                    <ThreeDotsMenu />
                </div>
                <div className="userComment">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                    <div className="d-flex justify-content-start">
                        <span className="d-flex align-items-center p-2">
                            <BsSuitHeart size="22" />  5
                        </span>
                        <span className="d-flex align-items-center p-2">
                            <BsReply size="22" />  15
                        </span>
                        <span className="d-flex align-items-center p-2">
                            <FaRetweet size="22" />  3
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-start align-items-center">
                    <img src="https://via.placeholder.com/150" width="50" height="50" className="rounded-circle"></img>
                    <p className="userName">John Doe</p>
                    <ThreeDotsMenu />
                </div>
                <div className="userComment">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                    </p>
                    <img class="postImg" src="https://via.placeholder.com/600"></img>
                    <div className="d-flex justify-content-start">
                        <span className="d-flex align-items-center p-2">
                            <BsSuitHeart size="22" />  5
                        </span>
                        <span className="d-flex align-items-center p-2">
                            <BsReply size="22" />  15
                        </span>
                        <span className="d-flex align-items-center p-2">
                            <FaRetweet size="22" />  3
                        </span>
                    </div>
                </div>
                <hr/>
            </div>
        </Container>
    );
}