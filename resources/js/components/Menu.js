import React from "react";
import { useState, useEffect } from "react";
import Logout from "./Logout";
import Profile from "./Profile";

const Menu = ({ openMenu, setOpenMenu, handleLogout }) => {
    // const handleLogout = () => {
    //     axios.post("/logout").then(() => (location.href = "/"));
    // };
    const [user, setUser] = useState({});

    const fetchData = async () => {
        const { data } = await axios.get("/api/user");
        console.log(data);
        setUser(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="menu-container">
            <h2>{user.first_name}</h2>
            <h2>{user.last_name}</h2>
            <img className="account" src="images/user.png" alt="account" />
            <img
                onClick={() => setOpenMenu(!openMenu)}
                className="menu"
                src="images/menu.png"
                alt="menu"
            />
            {openMenu && (
                <ul>
                    {/* <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li> */}
                    <li>Account</li>
                    <li>Chat</li>
                    <li>Settings</li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
