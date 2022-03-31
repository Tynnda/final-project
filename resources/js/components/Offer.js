import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "/css/offer.css";
import "/css/offer-list-countries-cities.css";

const Offer = () => {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectionFrom, setSelectionFrom] = useState({
        country: {},
        city: {},
    });

    const navigate = useNavigate();

    const [sizes, setSizes] = useState([]);

    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);

    const toggleClass1 = () => {
        setActive1(!isActive1);
    };
    const toggleClass2 = () => {
        setActive2(!isActive2);
    };
    const toggleClass3 = () => {
        setActive3(!isActive3);
    };
    const toggleClass4 = () => {
        setActive4(!isActive4);
    };

    const [selectionTo, setSelectionTo] = useState({
        country: {},
        city: {},
    });

    const [values, setValues] = useState({
        from: {},
        to: {},
        date: "",
        text: "",
        price: "",
        size: {},
        // size_id: "",
    });

    const [openListFrom, setOpenListFrom] = useState(false);
    const [openListTo, setOpenListTo] = useState(false);

    const fetchData = async () => {
        const response = await axios.get("/api/offer");
        setCountries(response.data);
    };

    const fetchSizes = async () => {
        const response = await axios.get("/api/sizes");
        // console.log(response.data);
        setSizes(response.data);
    };

    useEffect(
        () => {
            fetchData(), fetchSizes();
        },
        [],
        []
    );

    const handleClickFrom = (element) => {
        setSelectionFrom(element);
        setCities(element.cities);
    };
    const handleClickTo = (element) => {
        setSelectionTo(element);
        setCities(element.cities);
    };

    const citiesClickFrom = (element) => {
        setValues({ ...values, from: element });
        setOpenListFrom(false);
        setOpenListTo(true);
    };
    const citiesClickTo = (element) => {
        setValues({ ...values, to: element });
        setOpenListTo(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const axios_response = await axios.post("/api/offer/store", values);

        navigate("/my_profile");
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <>
            <div className="offer-form-div">
                <form
                    className="offer-form"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <div className="form-heading">
                        <h1>Post your offer</h1>
                    </div>
                    <div className="input-container">
                        <div className="offer-inputs">
                            <input
                                onFocus={() => {
                                    setOpenListFrom(true), setOpenListTo(false);
                                }}
                                type="text"
                                name="departure_id"
                                onChange={handleChange}
                                value={values.from.name}
                                placeholder="from"
                                autoComplete="off"
                            />

                            <input
                                onFocus={() => {
                                    setOpenListTo(true), setOpenListFrom(false);
                                }}
                                type="text"
                                name="arrival_id"
                                onChange={handleChange}
                                value={values.to.name}
                                placeholder="to"
                                autoComplete="off"
                            />

                            <input
                                type="date"
                                name="date"
                                value={values.date}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <h4>How much space do you offer?</h4>
                        <div className="form-images-container">
                            <img
                                src="images/pocket.png"
                                className={
                                    isActive1 ? "form-images2" : "form-images"
                                }
                                onClick={toggleClass1}
                            />
                            <img
                                src="images/backpack.png"
                                className={
                                    isActive2 ? "form-images3" : "form-images4"
                                }
                                onClick={toggleClass2}
                            />
                            <img
                                src="images/luggage.png"
                                className={
                                    isActive3 ? "form-images5" : "form-images6"
                                }
                                onClick={toggleClass3}
                            />
                            <img
                                src="images/suitcase.png"
                                className={
                                    isActive4 ? "form-images7" : "form-images8"
                                }
                                onClick={toggleClass4}
                            />
                        </div>

                        {openListFrom && (
                            <div name="from" className="countries">
                                {countries.map((element, i) => (
                                    <div
                                        key={element.id}
                                        onClick={() => handleClickFrom(element)}
                                        className="countries-name"
                                    >
                                        <p>{element.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!!cities.length && openListFrom && (
                            <div className="cities">
                                {cities.map((element) => (
                                    <div className="cities-name">
                                        <p
                                            key={element.id}
                                            onClick={() =>
                                                citiesClickFrom(element)
                                            }
                                        >
                                            {element.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {openListTo && (
                            <div name="to" className="countries">
                                {countries.map((element, i) => (
                                    <div
                                        key={element.id}
                                        onClick={() => handleClickFrom(element)}
                                        className="countries-name"
                                    >
                                        <p>{element.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!!cities.length && openListTo && (
                            <div className="cities">
                                {cities.map((element) => (
                                    <p
                                        key={element.id}
                                        onClick={() => citiesClickTo(element)}
                                    >
                                        {element.name}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="form-part2">
                        <div className="textarea-price">
                            <h4>Describe your advertisement...</h4>
                            <textarea
                                type="text"
                                rows="10"
                                maxlength = "390"
                                name="text"
                                value={values.text}
                                onChange={handleChange}
                                placeholder="your advertisement..."
                            ></textarea>
                            <br />
                            <h4>
                                Set price for your offer... money?.. chocolate?
                            </h4>
                            <input
                                type="text"
                                name="price"
                                placeholder="price"
                                value={values.price}
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <button>Save</button>
                    </div>
                </form>

                {(openListFrom || openListTo) && (
                    <div
                        className="shadow"
                        onClick={() => {
                            setOpenListFrom(false), setOpenListTo(false);
                        }}
                    ></div>
                )}
            </div>
        </>
    );
};

export default Offer;
