import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Components
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import Offer from "./components/Offer";
import Search from "./components/Search";
import Chat from "./components/Chat";

//CSS + Logo + Font Awesome Icons
import "/css/app.css";
import Logo from '/images/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const App = () => {
    const [user, setUser] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const getUserInfo = async () => {
        try {
            const { data } = await axios.get("/api/user");
            setUser(data);
            console.log("user is logged in");
        } catch (error) {
            setUser(null);
            console.log("user is not logged in");
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <BrowserRouter>
            <header className="header">
                <div className="header__trashare">
                    <Link to="/">
                        <img src={Logo}/>
                    </Link>
                    <Link to="/">
                        <h2>trashare</h2>
                    </Link>
                </div>

                <nav>
                    {user ? "" : <Link to="/register">Register</Link>}
                    {user ? "" : <Link to="/login">Login</Link>}
                </nav>
                {user ? (
                    <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                ) : (
                    ""
                )}
            </header>
           
                {openMenu && (
                    <div
                        className="shadow"
                        onClick={() => setOpenMenu(false)}
                    ></div>
                )}

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/chat/:offer_id" element={<Chat />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/offer" element={<Offer />} />
                    <Route
                        exact
                        path="/profile/:profile_id"
                        element={<Profile />}
                    />

                    <Route exact path="/my_profile" element={<Profile />} />
                    {user ? (
                        ""
                    ) : (
                        <Route
                            exact
                            path="/register"
                            element={<Register getUserInfo={getUserInfo} />}
                        />
                    )}
                    {user ? (
                        ""
                    ) : (
                        <Route
                            exact
                            path="/login"
                            element={<Login getUserInfo={getUserInfo} />}
                        />
                    )}
                </Routes>
            
            <footer className="footer">

                    <div className="footer__copyright ">
                        <p>©2022 All Rights Reserved, trashare®</p>
                    </div>
                    <div className="footer__icons">
                        <a
                            className="footer__icons--fb footer__icons--icon"
                            href="https://www.facebook.com/Trashare-103244095682812"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                            className="footer__icons--ig footer__icons--icon"
                            href="https://www.instagram.com/trashare.official/"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            className="footer__icons--tw footer__icons--icon"
                            href="https://twitter.com/trashare2022"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                
            </footer>
        </BrowserRouter>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
