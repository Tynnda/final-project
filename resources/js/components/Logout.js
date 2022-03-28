import React from "react";
import axios from "axios";

const Logout = () => {
    const handleLogout = async () => {
        await axios.post("/logout").then(() => (location.href = "/"));
    };

    return <a onClick={handleLogout}>Logout</a>;
};

export default Logout;
