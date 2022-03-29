import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "./StarRating";

const Profile = () => {
    const [user, setUser] = useState({});
    const [searchResults, setSearchResults] = useState([]);

    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    const params = useParams();

    const fetchData2 = async () => {
        if (params.profile_id) {
            const response = await axios.get(
                "/api/profile/" + params.profile_id
            );
            if (response.data) {
                setSearchResults(response.data);
                setUser(response.data[0].user);
            }
        } else {
            const response = await axios.get("/api/my_profile");

            if (response.data) {
                setUser(response.data[0].user);
                setSearchResults(response.data);
            }
        }
    };

    const [avg_value, setAvg_value] = useState(0);

    const handleSubmitRating = async (number) => {
        const response = await axios.post("/api/reviews/" + params.profile_id, {
            rating_value: number,
        });

        const data = await response.data;
        const rate = await data.map((element) => element.rating_value);

        const countRate = await rate.reduce((a, b) => a + b, 0);
        const avg = countRate / rate.length;
        setAvg_value(avg.toFixed(1));
    };

    useEffect(() => {
        fetchData2();
    }, [params.profile_id]);

    // count rating star

    const fetchReviews = async () => {
        const response = await axios.get("/api/reviews/" + params.profile_id);

        const data = await response.data;
        const rate = await data.map((element) => element.rating_value);

        const countRate = await rate.reduce((a, b) => a + b, 0);
        const avg = countRate / rate.length || 0;
        setAvg_value(avg.toFixed(1));
    };

    useEffect(() => {
        if (params.profile_id !== undefined) {
            fetchReviews();
        }
    }, [params.profile_id]);

    if (user && searchResults.length) {
        return (
            <>
                <div className="profile-container">
                    <div>
                        <h2>
                            {user.first_name || "N/A"} {user.last_name || "N/A"}
                        </h2>
                        <StarRating
                            avg_value={avg_value}
                            handleSubmit={handleSubmitRating}
                        />
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
