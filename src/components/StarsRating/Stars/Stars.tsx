import Star from '../Star/Star';
import './Stars.scss';

const NUMBER_OF_STARS = 5;

type StarsProps = {
    count: number;
    handleClick?: Function;
    isReadonly?: boolean;
};

const Stars = ({count, handleClick, isReadonly}: StarsProps) => {
    const totalStars = Array.from(Array(NUMBER_OF_STARS).keys());
    return (
        <span className="stars">
            {totalStars.map((i: number) => (
                <Star
                    isReadonly={isReadonly}
                    key={i}
                    isFull={i < count}
                    onClick={() => handleClick && handleClick(i + 1)}
                />
            ))}
        </span>
    );
};

export default Stars;
