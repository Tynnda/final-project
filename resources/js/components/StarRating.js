import React from "react";
import { useState, useEffect, useParams } from "react";
/* import PrettyRating from "pretty-rating-react"; */
import {
    faHeart,
    faStar,
    faHeartBroken,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as farHeart,
    faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ avg_value = 0, handleSubmit }) => {
    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
            empty: farStar,
        },
    };
    const colors = {
        star: ["#d9ad26", "#d9ad26", "#434b4d"],
    };

    return (
        <div>
            <div>
                <PrettyRating
                    icons={icons.star}
                    colors={colors.star}
                    value={avg_value || 0}
                    name="rating_value"
                    onChange={(e) => handleSubmit(e)}
                />
            </div>
        </div>
    );
};

export default StarRating;

function PrettyRating({
    count = 5,
    value = 0,
    inactiveColor = "#ddd",
    size = 24,
    activeColor = "#FFD93D",
    onChange,
}) {
    // short trick
    const stars = Array.from({ length: count }, () => "★");

    // Internal handle change function
    const handleChange = (value) => {
        onChange(value + 1);
    };

    return (
        <div className="rating">
            {stars.map((s, index) => {
                let style = inactiveColor;
                if (index < value) {
                    style = activeColor;
                }
                return (
                    <span
                        className={"star"}
                        key={index}
                        style={{
                            color: style,
                            width: size,
                            height: size,
                            fontSize: size,
                        }}
                        onClick={() => handleChange(index)}
                    >
                        {s}
                    </span>
                );
            })}
            <p>{value}</p>
        </div>
    );
}
