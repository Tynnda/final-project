import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "/images/loading.svg";
import Logo from "/images/logo.svg";

//CSS + Logo + Font Awesome Icons
import "/css/listOffer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faCalendarDay,
    faPlaneDeparture,
    faPlaneArrival,
    faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ListOffer = ({ searchResults, loading }) => {
    const navigate = useNavigate();
    return (
        <div className="search__offers">
            {loading ? (
                <div className="loading">
                    <img src={Loading} />
                </div>
            ) : (
                <Fragment>
                    {searchResults.map((item, i) => (
                        <div className="search__offers__card" key={i}>
                            <div className="search__offers__card__left">
                                <div>
                                    <div className="row user">
                                        <FontAwesomeIcon
                                            style={{ cursor: "pointer" }}
                                            className="icon"
                                            onClick={() =>
                                                navigate(
                                                    "/profile/" + item.user.id
                                                )
                                            }
                                            icon={faUserCircle}
                                        />
                                        <p
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                navigate(
                                                    "/profile/" + item.user.id
                                                )
                                            }
                                        >
                                            {item.user.first_name}
                                        </p>
                                    </div>
                                    <div className="row">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faCalendarDay}
                                        />
                                        <p>{item.departure_time}</p>
                                    </div>{" "}
                                    <br />
                                    <div className="row">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faPlaneDeparture}
                                        />
                                        <p>
                                            {item.departure.country.name}{" "}
                                            {item.departure.name}
                                        </p>
                                    </div>
                                    <div className="row">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faPlaneArrival}
                                        />
                                        <p>
                                            {item.arrival.country.name}{" "}
                                            {item.arrival.name}
                                        </p>
                                    </div>
                                </div>

                                <div className="trashare">
                                    <img src={Logo} />
                                    <h2>trashare</h2>
                                </div>
                            </div>

                            <div className="search__offers__card__right">
                                <div className="text">
                                    <p>{item.text}</p>
                                </div>
                                <div className="row">
                                    <div className="money">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faMoneyBillWave}
                                        />
                                        <p>
                                            {" "}
                                            <strong>{item.price}</strong>
                                        </p>
                                    </div>

                                    <button
                                        onClick={() =>
                                            navigate("/chat/" + item.id)
                                        }
                                    >
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Fragment>
            )}
        </div>
    );
};

export default ListOffer;
