import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "./StarRating";

const Profile = () => {
    const [user, setUser] = useState({});
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate();

    const params = useParams();

    const fetchData2 = async () => {
        console.log(params.profile_id);
        if (params.profile_id) {
            const response = await axios.get(
                "/api/profile/" + params.profile_id
            );
            if (response.data) {
                setSearchResults(response.data);
                setUser(response.data[0].user);
            }

            console.log(response.data);
        } else {
            const response = await axios.get("/api/my_profile");

            if (response.data) {
                setUser(response.data[0].user);
                setSearchResults(response.data);
            }

            console.log(response.data);
        }
    };

    useEffect(() => {
        fetchData2();
    }, [params.profile_id]);

    const [avg_value, setAvg_value] = useState(0);

    if (user && searchResults.length) {
        return (
            <>
                <div className="profile-container">
                    <div>
                        <h2>
                            {user.first_name || "N/A"} {user.last_name || "N/A"}
                        </h2>
                        <StarRating avg_value={avg_value} />
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
                                        {item.user.first_name || "N/A"}{" "}
                                        {item.user.last_name || "N/A"}
                                    </h3>
                                </div>
                                <div className="offer-details">
                                    <h4>{item.departure_time}</h4>
                                    <h4>
                                        from: {item.departure.country.name}{" "}
                                        {"->"} {item.departure.name}{" "}
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
    } else {
        return <div>loading...</div>;
    }
};

export default Profile;
