import React from "react";

const ListOffer = ({ fetchData2, searchResults }) => {
    return (
        <div>
            <button onClick={fetchData2}>search</button>
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
                    <button>send a message</button>
                </tr>
            ))}
        </div>
    );
};

export default ListOffer;
