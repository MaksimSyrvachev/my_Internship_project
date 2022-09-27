import { Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";


export default function ThreeDotsMenu() {
    return (
        <div className="threeDots">
            <Dropdown>
                <Dropdown.Toggle className="dropdownBtn"><BsThreeDotsVertical size="22" /></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item style={{color:"#000000"}} href="#">
                        Item 1
                    </Dropdown.Item>
                    <Dropdown.Item style={{color:"#000000"}} href="#">
                        Item 2
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}