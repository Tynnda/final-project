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
                {/* <div>
                    <input
                        type="button"
                        value={1}
                        name="rating_value"
                        onClick={() => handleSubmit(1)}
                    />
                    <input
                        type="button"
                        value={2}
                        name="rating_value"
                        onClick={() => handleSubmit(2)}
                    />
                    <input
                        type="button"
                        value={3}
                        name="rating_value"
                        onClick={() => handleSubmit(3)}
                    />
                    <input
                        type="button"
                        value={4}
                        name="rating_value"
                        onClick={() => handleSubmit(4)}
                    />
                    <input
                        type="button"
                        value={5}
                        name="rating_value"
                        onClick={() => handleSubmit(5)}
                    />
                </div> */}
                {/* <div>
                    <img src="/images/star.png" alt="star" />
                    <p>{avg_value}</p>
                </div> */}
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
    activeColor = "#f00",
    onChange,
}) {
    // short trick
    const stars = Array.from({ length: count }, () => "★");

    // Internal handle change function
    const handleChange = (value) => {
        onChange(value + 1);
    };

    return (
        <div>
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
            {value}
        </div>
    );
}

/* 
function StarRatingDemo() {
  // Get the rating from a db if required.
  // The value 3 is just for testing.
  const [rating, setRating] = useState(3);

  const handleChange = (value) => {
    setRating(value);
  }
  return (
    <div>
      <h2>Star Rating Demo</h2>

     <StarRating 
       count={5}
       size={40}
       value={rating}
       activeColor ={'red'}
       inactiveColor={'#ddd'}
       onChange={handleChange}  />
    </div>
  )
} */
