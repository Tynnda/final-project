import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
    const [countries, setCountries] = useState([]);
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
        date: "",
        text: "",
        price: "",
        // size_id: "",
    });

    // const [valueFrom, setValueFrom] = useState("");
    // const [valueTo, setValueTo] = useState("");

    const [openListFrom, setOpenListFrom] = useState(false);
    const [openListTo, setOpenListTo] = useState(false);

    // const [inputFrom, setInputFrom] = useState({
    //     country: "",
    //     city: "",
    // });
    // const [inputTo, setInputTo] = useState({
    //     country: "",
    //     city: "",
    // });

    const fetchData = async () => {
        const response = await axios.get("/api/offer");
        console.log(response);
        setCountries(response.data);
    };

    useEffect(() => {
        fetchData();
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

    // const handleChangeFrom = (e) => {
    //     setInputFrom({ ...input, [e.target.name]: e.target.value });
    // };
    // const handleChangeTo = (e) => {
    //     setInputTo({ ...input, [e.target.name]: e.target.value });
    // };

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const axios_response = await axios.post("/api/offer/store", values);
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
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="input-container">
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
                        name="date"
                        value={values.date}
                        onChange={handleChange}
                    />

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

                {values?.from?.name && values?.to?.name && (
                    <div className="form-part2">
                        <textarea
                            type="text"
                            rows="20"
                            name="text"
                            value={values.text}
                            onChange={handleChange}
                        >
                            Your advertisement
                        </textarea>
                        <br />
                        <label>Size</label>
                        {/* <select
                            name="size"
                            value={values.size}
                            onChange={handleChange}
                        >
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                        <br /> */}
                        <input
                            type="text"
                            name="price"
                            placeholder="price"
                            value={values.price}
                            onChange={handleChange}
                        />
                        <br />
                        <button>save</button>
                    </div>
                )}
            </form>
        </>
    );
};

export default Offer;
