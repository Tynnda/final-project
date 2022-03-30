import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import ListOffer from "./ListOffer";
import "/css/search-list-countries-cities.css";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlaneDeparture,
    faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    const [countries, setCountries] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectionFrom, setSelectionFrom] = useState({
        country: {},
        city: {},
    });
    const [selectionTo, setSelectionTo] = useState({
        country: {},
        city: {},
    });

    const [values, setValues] = useState({
        from: {},
        to: {},
        dateFrom: "",
        dateTo: "",
    });

    // loading gif
    const [loading, setLoading] = useState(false);

    const [openListFrom, setOpenListFrom] = useState(false);
    const [openListTo, setOpenListTo] = useState(false);

    const fetchData = async () => {
        const response = await axios.get("/api/offer");
        console.log(response);
        setCountries(response.data);
    };

    const fetchData2 = async () => {
        setLoading(true);
        const response = await axios.post("/api/search/offers", {
            from: values.from,
            to: values.to,
            dateFrom: values.dateFrom,
            dateTo: values.dateTo,
        });
        console.log(response.data);
        setSearchResults(response.data);
        setLoading(false);
    };

    const fetchData3 = async () => {
        setLoading(true);
        const response = await axios.get("/api/search/offers");
        setSearchResults(response.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData(), fetchData3();
    }, []);

    const handleClickFrom = (element) => {
        console.log(element);
        setSelectionFrom(element);
        setCities(element.cities);
    };
    const handleClickTo = (element) => {
        console.log(element);
        setSelectionTo(element);
        setCities(element.cities);
    };

    const citiesClickFrom = (element) => {
        console.log(element.name);
        setValues({ ...values, from: element });
        setOpenListFrom(false);
        setOpenListTo(true);
    };
    const citiesClickTo = (element) => {
        console.log(element.name);
        setValues({ ...values, to: element });
        setOpenListTo(false);
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
        <main className="search">
            <div className="search__bar">
                <div>
                    <FontAwesomeIcon className="icon" icon={faPlaneDeparture} />
                    <input
                        onFocus={() => {
                            setOpenListFrom(true), setOpenListTo(false);
                        }}
                        type="text"
                        name="departure_id"
                        onChange={handleChange}
                        value={values.from.name}
                        placeholder="Departure"
                        autoComplete="off"
                    />
                </div>

                <div>
                    <FontAwesomeIcon className="icon" icon={faPlaneArrival} />
                    <input
                        onFocus={() => {
                            setOpenListTo(true), setOpenListFrom(false);
                        }}
                        type="text"
                        name="arrival_id"
                        onChange={handleChange}
                        value={values.to.name}
                        placeholder="Arrival"
                        autoComplete="off"
                    />
                </div>

                <div>
                    <input
                        type="date"
                        name="dateFrom"
                        value={values.dateFrom}
                        onChange={handleChange}
                    />

                    <input
                        type="date"
                        name="dateTo"
                        value={values.dateTo}
                        onChange={handleChange}
                    />
                </div>

                <button onClick={fetchData2}>Search</button>
            </div>

            <ListOffer
                fetchData2={fetchData2}
                searchResults={searchResults}
                loading={loading}
            />

            {openListFrom && (
                <div name="from" className="countries-search">
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
                <div className="cities-search">
                    {cities.map((element) => (
                        <div className="cities-name">
                            <p
                                key={element.id}
                                onClick={() => citiesClickFrom(element)}
                            >
                                {element.name}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {openListTo && (
                <div name="to" className="countries-search">
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
                <div className="cities-search">
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

            {(openListFrom || openListTo) && (
                <div
                    className="shadow"
                    onClick={() => {
                        setOpenListFrom(false), setOpenListTo(false);
                    }}
                ></div>
            )}
        </main>
    );
};

export default Search;
