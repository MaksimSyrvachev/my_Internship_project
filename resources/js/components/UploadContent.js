import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { default as ReactSelect } from "react-select";
import { BsCloudUpload,BsPencilSquare,BsChatLeftDots,BsPeople,BsCoin,BsFolder2,BsCalendar3,BsCheck2Square } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Axios and API URL for file uploads
import axios from "axios";
const FILE_URL = "/api/uploads/videos";

export default function UploadContent() {

    // States
    const hiddenFileInput = React.useRef(null);
    const [selectedFile, setSelectedFile] = useState('');
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [optionSelected, setOptionSelected] = useState();
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState('');
    const [cover, setCover] = useState('');
    const coverRef = React.useRef(null);

    // Navigation
    const navigate = useNavigate();


    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSelectChange = (selected) => {
        setOptionSelected(selected);
    };


    // Only allow Uploads for logged in Users
    useEffect(()=>{
        if (!localStorage.getItem("user")){
            navigate('/login')
        }
    }, [])

    // allows to send filled in data to backend for further processing
    const handleSubmit = async (e) => { //creating async function, which will be executed while user click the button 'submit'
        e.preventDefault();// preventing default behavior

        const new_crew_data = optionSelected.map((crew) => crew.label);//saving to variable new_crew_data only label values from optionSelected
        const fData = new FormData();//creating form Data for accessing it from backend with help of Request
        
        //appending data from form, which is saved to states to FDate (next fDate will be send to backend)
        fData.append("video", selectedFile);
        fData.append("description", description);
        fData.append("title", title);
        fData.append("optionSelected", JSON.stringify(new_crew_data));
        fData.append("price", price);
        fData.append("genre", genre);
        fData.append("date", date);
        fData.append("cover", cover);

        //configuration for sending post request
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }

        const id = JSON.parse(localStorage.getItem("user"))?.data?.id//geting user id from local storage from web page

        try {
            // Upload to Backend
            await axios.post(`${FILE_URL}/${id}`, fData, config)
            
            // Set states
            setSelectedFile('');
            setIsFilePicked(false);
            setDescription('');
            setTitle('');
            setOptionSelected(null);
            setPrice('');
            setGenre('');
            setDate('');

            coverRef.current.value = null;

        } catch(err) {
            console.log(`Error ${err.message}`);
        }

    }

    // Styles
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: "1px solid white",
            color: state.isSelected ? "#242424" : "white",
            backgroundColor: state.isSelected ? "white" : "black",
            
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: "#242424",
            color: "white",
            border:"0px"
        }),
    };

    return (
        <Container fluid className="d-flex justify-content-center p-3">
            <Form onSubmit={handleSubmit}>
                <div
                    className="uploadDivs d-flex justify-content-center align-items-center"
                    role="button"
                    onClick={handleClick}
                >
                    <BsCloudUpload size="30" className="me-2"/>
                    <span>  &nbsp; </span>Choose your file
                </div>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    name="video"
                    style={{ display: "none" }}
                />
              

                <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                   
                <Form.Label> <BsPencilSquare size="20"/> Describe Your Content</Form.Label>
                   <Form.Control
                        as="textarea"
                        placeholder="Enter describe"
                        name="describe"
                        className="textareas"
                        required
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> <BsChatLeftDots size="20"/> Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        name="title"
                        required
                        className="textareas"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label> <BsPeople size="20"/> Crew</Form.Label>
                    <ReactSelect
                        options={colourOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        placeholder="Select your crew Member"
                        styles={customStyles}
                        onChange={handleSelectChange}
                        allowSelectAll={true}
                        value={optionSelected}
                        name="crew"
                    />
                </Form.Group>

                <Row>
                    <Col md={3} sm={6}>
                        <Form.Group className="mb-3">
                        <Form.Label> <BsCoin size="20"/> Price</Form.Label>
                            <input
                                onKeyPress={(event) => {
                                    if (!/[0-9, .]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                className="uploadCover"
                                name="price"
                                placeholder="€5"
                                value={price}
                                onChange={(e)=>setPrice(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3} sm={6}>
                        <Form.Group className="mb-3">
                            <Form.Label> <BsFolder2 size="20"/> Genre</Form.Label>
                            <Form.Select name="genre" className="uploadCover" onChange={(e)=>setGenre(e.target.value)} value = {genre}>
                                <option>Comedy</option>
                                <option>Biography</option>
                                <option>History</option>
                                <option>Stand-up</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={3} sm={6}>
                        <Form.Group controlId="dob">
                            <Form.Label>  <BsCalendar3 size="20"/> Release Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                className="uploadCover"
                                onChange={(e)=>setDate(e.target.value)}
                                value={date}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3} sm={6}>
                        <Form.Group>
                            <Form.Label>  <BsCheck2Square size="20"/> Cover</Form.Label>
                            {/* <div
                                className="uploadCover d-flex justify-content-center align-items-center"
                                role="button"
                                onClick={handleClick}
                            >
                                 <BsCloudUpload size="25" />
                            </div> */}
                            <input
                                className="uploadCover d-flex justify-content-center align-items-center"
                                type="file"
                                onChange={(e) => setCover(e.target.files[0])}
                                name="cover"
                                ref={coverRef}
                                //style={{ display: "none" }}
                             />
                        </Form.Group>
                    </Col>
                </Row>

                <span className="d-flex justify-content-center">
                    <Button disabled={!isFilePicked ? true: false} variant="outline-light" type="submit">
                        Share
                    </Button>
                </span>
            </Form>
        </Container>
    );
}

const colourOptions = [
    { value: "ocean1", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
];
