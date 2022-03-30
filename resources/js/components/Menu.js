import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

//components
import Logout from "./Logout";
import Profile from "./Profile";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faMagnifyingGlass,
    faPlusCircle,
    faUser,
    faGear,
    faRightFromBracket,
    faComment,
    faAngleDown,
    faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import {  } from "@fortawesome/free-brands-svg-icons";

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
        <div className="header__menu">
            <Link to="/search">
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            </Link>
            <Link to="/search">
                <a className="text">Search</a>
            </Link>
            <Link to="/offer">
                <FontAwesomeIcon className="icon" icon={faPlusCircle} />
            </Link>
            <Link to="/offer">
                <a className="text">Post</a>
            </Link>

            <Link to="/my_profile">
                <a className="user-name">{user.first_name}</a>
            </Link>
            <Link to="/my_profile">
                <FontAwesomeIcon className="user" icon={faUserCircle} />
            </Link>

            <FontAwesomeIcon
                className="icon"
                icon={faAngleDown}
                onClick={() => setOpenMenu(!openMenu)}
            />

            {openMenu && (
                <div className="header__hamburger">
                    <div>
                        <FontAwesomeIcon className="icon" icon={faUser} />
                        <Link to="/my_profile">
                            <a>Profile</a>
                        </Link>
                    </div>

                    <div>
                        <FontAwesomeIcon className="icon" icon={faGear} />
                        <Link to="/my_profile">
                            <a>Settings</a>
                        </Link>
                    </div>

                    <div>
                        <FontAwesomeIcon className="icon" icon={faComment} />
                        <Link to="/chat">
                            <a>Chat</a>
                        </Link>
                    </div>

                    <div>
                        <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
                        <Logout />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
