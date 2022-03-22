import React from "react";
import { useState, Fragment } from "react";
import Logout from "./Logout";

const Menu = ({ openMenu, setOpenMenu, handleLogout }) => {
    return (
        <div className="menu-container">
            <img className="account" src="images/user.png" alt="account" />
            <img
                onClick={() => setOpenMenu(!openMenu)}
                className="menu"
                src="images/menu.png"
                alt="menu"
            />
            {openMenu && (
                <ul>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
