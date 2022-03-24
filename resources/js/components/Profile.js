import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ListOffer from "./ListOffer";

const Profile = () => {
    const [user, setUser] = useState({});
    const [searchResults, setSearchResults] = useState([]);

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
                </div>
                <div>
                    <img src="images/user.png" />
                </div>
            </div>
            <div>
                {searchResults.map((item, i) => (
                    <tr key={i}>
                        <th>{item.user.first_name}</th>
                        <th>{item.departure.country.name}</th>

                        <th>{item.departure.name}</th>
                        <th>{item.arrival.country.name}</th>

                        <th>{item.arrival.name}</th>
                        <th>{item.departure_time}</th>
                        <th>{item.text}</th>
                        <th>{item.price}</th>
                    </tr>
                ))}
            </div>
        </>
    );
};

export default Profile;
