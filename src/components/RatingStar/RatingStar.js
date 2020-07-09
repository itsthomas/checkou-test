import React, {useState, useEffect} from 'react';
import './RatingStar.css';

const RatingStar = (props) => {
    const [rating, setRating] = useState(props.rating);
    const [hover, setHover] = useState(props.rating);

    useEffect(() => {
        setRating(props.rating);
        setHover(props.rating);
    }, [props.rating]);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input
                            type='radio'
                            className='ratingInput'
                            value={ratingValue}
                            onClick={() => {
                                setRating(ratingValue);
                                // Passing ratingValue to the parent component (RatingForm)
                                props.onceClicked(ratingValue);
                            }}
                        />

                        <svg
                            key={ratingValue}
                            className={
                                ratingValue <= (hover || rating)
                                    ? 'star gold-star'
                                    : 'star grey-star'
                            }
                            height='45px'
                            width='43px'
                            viewBox='0 0 25 23'
                            data-rating='1'
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        >
                            <polygon
                                strokeWidth='0'
                                points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
                            />
                        </svg>
                    </label>
                );
            })}
            {/* <p>The Rating is: {rating}</p> */}
        </div>
    );
};

export default RatingStar;
