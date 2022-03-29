import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '/images/loading.svg';

//CSS + Logo + Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPlaneDeparture, faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ListOffer = ({ searchResults, loading }) => {
    const navigate = useNavigate();
    return (
        <div className="search__offers">
            
            {loading ? (
                <img src={Logo} />
            ) : (
                <div className="search__offers__card" >
                    {searchResults.map((item, i) => (
                        <div className="search__offers__card" key={i}>



                            <div className="offer-part1">
                                <div className="offer-name-image">
                                    
                                    <FontAwesomeIcon onClick={() =>
                                            navigate("/profile/" + item.user.id)
                                        } className='user' icon={faUserCircle} />
                                    <h3
                                        onClick={() =>
                                            navigate("/profile/" + item.user.id)
                                        }
                                    >
                                        {item.user.first_name}{" "}
                                        {item.user.last_name}
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
                                    send a message
                                </button>
                            </div>



                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListOffer;
