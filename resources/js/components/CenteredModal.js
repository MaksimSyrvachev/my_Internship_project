import { Button, Modal } from "react-bootstrap";
import {useState} from "react";


export default function CenteredModal({data, title}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
        <a href="#" className="ccInteraction text-nowrap" onClick={handleShow}>{data?.length} {title}</a>
        
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Title className="modalTitle" CloseButton>
                {title}
                <hr/>
            </Modal.Title>
            <Modal.Body>
                <div class="d-flex justify-content-start align-items-center followerRow">
                    <img src="https://picsum.photos/50" className="rounded-circle"></img>
                    <a href="#" class="follow" style={{color: "#000"}}>John Doe</a>
                </div>
                <div class="d-flex justify-content-start align-items-center followerRow">
                    <img src="https://picsum.photos/50" className="rounded-circle"></img>
                    <a href="#" class="follow" style={{color: "#000"}}>John Doe</a>
                </div>
                <div class="d-flex justify-content-start align-items-center followerRow">
                    <img src="https://picsum.photos/50" className="rounded-circle"></img>
                    <a href="#" class="follow" style={{color: "#000"}}>John Doe</a>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}
