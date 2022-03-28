import React from "react";
import { useState, useEffect } from "react";
import Logout from "./Logout";
import Profile from "./Profile";
import userImg from "/images/user.png";
import downImg from "/images/down.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
            <img className="account" src={userImg} alt="account" />
            <img
                onClick={() => setOpenMenu(!openMenu)}
                className="menu"
                src={downImg}
                alt="menu"
            />
            {openMenu && (
                <ul>
                    {/* <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li> */}
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/chat">messages</Link>
                    </li>
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
