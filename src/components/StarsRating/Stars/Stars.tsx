import React from 'react';
import Star from '../Star/Star';
import './Stars.scss';

const NUMBER_OF_STARS = 5;

type StarsProps = {
    count: number;
    handleClick: Function;
};

const Stars = ({ count, handleClick }: StarsProps) => {
    const totalStars = Array.from(Array(NUMBER_OF_STARS).keys());
    return (
        <span className="stars">
            {totalStars.map((i: number) => (
                <Star
                    key={i}
                    isFull={i < count}
                    onClick={() => handleClick(i + 1)}
                />
            ))}
        </span>
    );
};

export default Stars;
