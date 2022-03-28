import React from "react";
import { useNavigate } from "react-router-dom";


const ListOffer = ({ fetchData2, searchResults, loading }) => {
    const navigate = useNavigate();
    return (
        <div className="offer-list">
            <button onClick={fetchData2}>search</button>
            {loading ? (
                <img src="" />
            ) : (
                <>
                    {searchResults.map((item, i) => (
                        <div className="offer-container" key={i}>
                            <div className="offer-part1">
                                <div className="offer-name-image">
                                    <img src="images/user.png" />
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
                </>
            )}
        </div>
    );
};

export default ListOffer;
