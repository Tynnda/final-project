import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ListOffer from "./ListOffer";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const Profile = () => {
    const [user, setUser] = useState({});
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate();

    const fetchData = async () => {
        const { data } = await axios.get("/api/user");
        console.log(data);
        setUser(data);
    };

    const fetchData2 = async () => {
        const response = await axios.get("/api/profile");
        setSearchResults(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchData(), fetchData2();
    }, []);

    return (
        <>
            <div className="profile-container">
                <div>
                    <h2>
                        {user.first_name} {user.last_name}
                    </h2>
                    <StarRating />
                </div>
                <div>
                    <img src="images/user.png" />
                </div>
            </div>
            <div className="offer-list">
                {searchResults.map((item, i) => (
                    <div className="offer-container" key={i}>
                        <div className="offer-part1">
                            <div className="offer-name-image">
                                <img src="images/user.png" />
                                <h3>
                                    {item.user.first_name} {item.user.last_name}
                                </h3>
                            </div>
                            <div className="offer-details">
                                <h4>{item.departure_time}</h4>
                                <h4>
                                    from: {item.departure.country.name} {"->"}{" "}
                                    {item.departure.name}{" "}
                                </h4>
                                <h4>
                                    to: {item.arrival.country.name} {"->"}{" "}
                                    {item.arrival.name}{" "}
                                </h4>
                            </div>
                        </div>
                        <div className="offer-text">
                            <p>{item.text}</p>
                        </div>
                        <div className="offer-button-price">
                            <h4>price: {item.price}</h4>
                            <button
                                onClick={() => navigate("/chat/" + item.id)}
                            >
                                chat
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Profile;
