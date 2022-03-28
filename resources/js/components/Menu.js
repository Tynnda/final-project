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
        <Fragment>
            <div className="header__offers">
                <Link to="/search">
                    <FontAwesomeIcon
                        className="icon"
                        icon={faMagnifyingGlass}
                    />
                </Link>
                <Link to="/search">
                    <a>Search</a>
                </Link>
                <Link to="/offer">
                    <FontAwesomeIcon className="icon" icon={faPlusCircle} />
                </Link>
                <Link to="/offer">
                    <a>Post</a>
                </Link>
            </div>

            <div className="header__menu">
                <Link to="/my_profile">
                    <a>{user.first_name}</a>
                </Link>
                <Link to="/my_profile">
                    <FontAwesomeIcon className="icon" icon={faUserCircle} />
                </Link>
                <FontAwesomeIcon
                    className="icon"
                    icon={faAngleDown}
                    onClick={() => setOpenMenu(!openMenu)}
                />
            </div>

            {openMenu && (
                <div className="header__hamburger">
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                        <Link to="/my_profile">
                            <a>Profile</a>
                        </Link>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faGear} />
                        <Link to="/my_profile">
                            <a>Settings</a>
                        </Link>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <Link to="/chat">
                            <a>Chat</a>
                        </Link>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <Logout />
                    </div>
                </div>
            )}

            {/* <h2>{user.first_name}</h2>
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
                    <li>Account</li>
                    <li>Chat</li>
                    <li>Settings</li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            )} */}
        </Fragment>
    );
};

export default Menu;
