import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "./StarRating";

import Loading from '/images/loading.svg';
import Logo from '/images/logo.svg';

//CSS + Logo + Font Awesome Icons
import "/css/listOffer.css";
import "/css/profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCalendarDay, faPlaneDeparture, faPlaneArrival, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-brands-svg-icons";

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
                <div className="profile__header">

                        
                        <div className="profile__header__user">
                            <div className="profile__header__user--info">
                                <p className="name">{user.first_name || "N/A"} {user.last_name || "N/A"}</p>
                                <StarRating
                                    avg_value={avg_value}
                                    handleSubmit={handleSubmitRating}
                                />
                                <p className="contact"><strong>email:</strong>  {user.email}</p>
                                <p className="contact"><strong>phone number:</strong> {user.phone_num}</p>
                            </div>
                            <FontAwesomeIcon className="profile__header__user--icon" icon={faUserCircle} />
                        </div>
                    
                </div>

                <div className="search__offers">
                
                <Fragment>
                    {searchResults.map((item, i) => (
                        <div className="search__offers__card" key={i}>

                            <div className="search__offers__card__left">
                                <div>
                                    <div className="row user">
                                        <FontAwesomeIcon className="icon" onClick={() => navigate("/profile/" + item.user.id)} icon={faUserCircle} />
                                        <p onClick={() => navigate("/profile/" + item.user.id)}>
                                            {item.user.first_name} 
                                        </p>
                                    </div>
    
                                    <div className="row">
                                        <FontAwesomeIcon className="icon" icon={faCalendarDay} />
                                        <p>{item.departure_time}</p>
                                    </div > <br/>
    
                                    <div className="row">
                                        <FontAwesomeIcon className="icon" icon={faPlaneDeparture} />
                                        <p>{item.departure.country.name} {item.departure.name}</p>
                                    </div>
    
                                    <div className="row">
                                        <FontAwesomeIcon className="icon" icon={faPlaneArrival} />
                                        <p>{item.arrival.country.name} {item.arrival.name}</p>
                                    </div>
                                </div>
                                
                                <div className="trashare">
                                    <img src={Logo}/>
                                    <h2>trashare</h2>
                                </div>

                                
                            </div>

                            <div className="search__offers__card__right">
                                <div className="text"><p >{item.text}</p></div>
                                <div className="row">
                                    <div className="money">
                                        <FontAwesomeIcon className="icon" icon={faMoneyBillWave} /> 
                                        <p> <strong>{item.price}</strong></p>
                                    </div>

                                    <button onClick={() => navigate("/chat/" + item.id)}>Message</button>
                                </div>
                            </div>


                        </div>
                    ))}
                
                </Fragment>
            
        </div>

            </>
        );
    } else {
        return <div className="loading"><img  src={Loading} /></div>;
    }
};

export default Profile;
