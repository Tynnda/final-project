import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/Register";
import "/css/app.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
// import Logout from "./components/Logout";
import Profile from "./components/Profile";

import Menu from "./components/Menu";
import Offer from "./components/Offer";
import Search from "./components/Search";
import Chat from "./components/Chat";
import logoImg from "/images/logo.png";
import StarRating from "./components/StarRating";

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
            <header>
                <Link to="/">
                    <img className="logo" src={logoImg} />
                </Link>
                <nav>
                    {user ? "" : <Link to="/register">Register</Link>}
                    {user ? "" : <Link to="/login">Login</Link>}
                    {user ? (
                        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    ) : (
                        ""
                    )}
                </nav>
            </header>
            <main>
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
                    <Route exact path="/profile" element={<Profile />} />

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
                    {/* <Route exact path="/logout" element={<Logout />} /> */}
                </Routes>
            </main>
            <footer>
                <div className="footer_links">
                    <a href="">About us</a>
                    <br />
                    <a href="">Address</a>
                    <br />
                    <a href="">Contact</a>
                </div>
                <div className="footer_images">
                    <img src="images/paypal.svg" alt="" />
                    <img src="images/github.svg" alt="" />
                    <img src="images/linkedin.svg" alt="" />
                </div>
            </footer>
        </BrowserRouter>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
