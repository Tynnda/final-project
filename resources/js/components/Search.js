import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import ListOffer from "./ListOffer";

const Search = () => {
    const [countries, setCountries] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [cities, setCities] = useState([]);
    // const [searchValue, setSearchValue] = useState({
    //     from: "",
    //     to: "",
    //     date: "",
    // });
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
        <>
            <div className="search-inputs">
                <input
                    onFocus={() => {
                        setOpenListFrom(true), setOpenListTo(false);
                    }}
                    type="text"
                    name="departure_id"
                    onChange={handleChange}
                    value={values.from.name}
                    placeholder="from"
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
                />

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

            <ListOffer
                fetchData2={fetchData2}
                searchResults={searchResults}
                loading={loading}
            />

            <div className="list_from_input">
                {openListFrom && (
                    <ul name="from" className="countries">
                        {countries.map((element, i) => (
                            <li
                                key={element.id}
                                onClick={() => handleClickFrom(element)}
                            >
                                {element.name}
                            </li>
                        ))}
                    </ul>
                )}

                {!!cities.length && openListFrom && (
                    <ul className="cities">
                        {cities.map((element) => (
                            <li
                                key={element.id}
                                onClick={() => citiesClickFrom(element)}
                            >
                                {element.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="list_from_input">
                {openListTo && (
                    <ul name="to" className="countries">
                        {countries.map((element, i) => (
                            <li
                                key={element.id}
                                onClick={() => handleClickTo(element)}
                            >
                                {element.name}
                            </li>
                        ))}
                    </ul>
                )}

                {!!cities.length && openListTo && (
                    <ul className="cities">
                        {cities.map((element) => (
                            <li
                                key={element.id}
                                onClick={() => citiesClickTo(element)}
                            >
                                {element.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Search;