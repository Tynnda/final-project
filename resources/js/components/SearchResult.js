import React from "react";

const SearchResult = ({ searchResults }) => {
    return (
        <>
            <tr className="bar">
                <th>Departure</th>
                <th>Arrival</th>
                <th>Dep Time</th>
                <th>Arr Time</th>
                <th>Price</th>
                <th></th>
            </tr>

            {searchResults.map((item, i) => (
                <tr className="flight" key={i}>
                    <th>{item.from}</th>
                    <th>{item.to}</th>
                    <th>{item.date}</th>
                </tr>
            ))}
        </>
    );
};

export default SearchResult;
