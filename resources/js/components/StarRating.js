import React from "react";
import PrettyRating from "pretty-rating-react";
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

const StarRating = ({ avg_value = 0 }) => {
    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
            empty: farStar,
        },
        heart: {
            complete: faHeart,
            half: faHeartBroken,
            empty: farHeart,
        },
    };
    const colors = {
        star: ["#d9ad26", "#d9ad26", "#434b4d"],
        heart: ["#9b111e", "#a83f39"],
    };

    return (
        <div>
            <div>
                <PrettyRating
                    value={avg_value}
                    icons={icons.star}
                    colors={colors.star}
                />
            </div>
        </div>
    );
};

export default StarRating;
