import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Tabs, Tab, Col } from "react-bootstrap";
import { BsThreeDotsVertical, BsInstagram, BsFacebook } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import GeneralCard from "./GeneralCard";
import SocialPost from "./SocialPost";
import ThreeDotsMenu from "./ThreeDotsMenu";
import CenteredModal from "./CenteredModal";


// Axios and the URL to fetch from
import axios from "axios";
const PROFILE_URL = "/api/profile";

// To test the profile feel free to add some dummy data in the database.
export default function CcProfile() {
    // States
    const [profileData, setProfileData] = useState();

    // Navigation
    const navigate = useNavigate();

    // Fetch Profile Data from Backend and save it in states
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const id = JSON.parse(localStorage.getItem("user"))?.data?.id;
                
                // Passing the id of the logged in user to get their data
                const response = await axios.post(
                    PROFILE_URL,
                    JSON.stringify({ id }),
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );

                // Set profile data in state for usage in components
                setProfileData(response?.data);
            } catch (err) {
                if (!err?.response) {
                    console.log("No Server Response");
                } else if (err.response?.status === 403) {
                    console.log("Unauthorized");
                    // Navigate to Login if user unauthorized
                    navigate("/login");
                } else {
                    console.log(err);
                }
            }
        };

        // Fetch Profile Data only if user logged in, otherwise redirect to /login
        if (localStorage.getItem("user")) {
            fetchProfileData();
        } else {
            navigate("/login");
        }
    }, []);

    // Retrieved data can now be used in here
    return (
        <Container>
            <div className="ccProfileHead mt-3">
                <Row>
                    <Col lg="4">
                        <img
                            src={profileData?.profile_picture}
                            class="profilePic rounded-circle"
                            alt="profile image"
                        ></img>
                    </Col>
                    <Col>
                        <div className="profileElement">
                            <div class="d-flex justify-content-start align-items-center">
                                <h1 className="ccInteraction text-nowrap">
                                    {profileData?.user_name}
                                </h1>
                                <GoVerified className="verifiedIcon" />
                                <Button
                                    variant="outline-light"
                                    className="ccInteraction"
                                >
                                    Follow
                                </Button>
                                <Button
                                    variant="outline-light"
                                    className="ccInteraction"
                                >
                                    Donate
                                </Button>
                                <ThreeDotsMenu />
                            </div>
                            <div class="d-flex justify-content-start">
                                <p className="ccInteraction text-nowrap">
                                    {profileData?.posts.length} Posts
                                </p>
                                <CenteredModal
                                    title={"Spectators"}
                                    data={profileData?.followers}
                                />
                                <CenteredModal
                                    title={"Following"}
                                    data={profileData?.followings}
                                />
                            </div>
                            <div class="d-flex justify-content-start">
                                <p className="ccInteraction">
                                    {profileData?.description}
                                </p>
                            </div>
                            <div class="d-flex justify-content-start">
                                <a
                                    href="#"
                                    className="ccInteraction text-nowrap"
                                >
                                    <BsFacebook /> {profileData?.user_name}
                                </a>
                                <a
                                    href="#"
                                    className="ccInteraction text-nowrap"
                                >
                                    <BsInstagram /> {profileData?.user_name}
                                </a>
                                <a
                                    href="#"
                                    className="ccInteraction text-nowrap"
                                >
                                    <FaTwitter /> {profileData?.user_name}
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Tabs
                defaultActiveKey="content"
                className="mb-3 justify-content-around"
            >
                <Tab eventKey="content" title="Content">
                    <Row className="my-4">
                        {
                            // Will output all the posts for the profile
                            profileData?.posts.map((post) => {
                                return <GeneralCard key={post.id} post={post} />;
                            })
                        }
                    </Row>
                </Tab>
                <Tab eventKey="social" title="Social">
                    <SocialPost />
                </Tab>
            </Tabs>
        </Container>
    );
}
