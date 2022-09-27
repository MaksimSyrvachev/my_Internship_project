import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Logout = () => {
    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        // Remove all Login data
        localStorage.clear();
        setUser(null);
        navigate("/");
    }, [])

    return (
        <div>
            Logging out...
        </div>
    )
};

export default Logout;
