import React from "react";
import axios from "axios";

const Logout = () => {
    const handleLogout = () => {
        axios.post("/logout").then(() => (location.href = "/"));
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
