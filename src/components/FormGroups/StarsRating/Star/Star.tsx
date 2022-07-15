import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStar} from '@fortawesome/free-regular-svg-icons';

import './Star.scss';

type StarProps = {
    isFull: boolean;
    isReadonly: boolean;
    onClick?: () => void;
};

const Star = ({isFull, onClick, isReadonly}: StarProps) => {
    const icon = isFull ? faStar : regularStar;
    const customClass = isReadonly ? 'readOnly-star' : 'star';

    return (
        <span className={customClass} onClick={onClick}>
            <FontAwesomeIcon icon={icon} size="lg" />
        </span>
    );
};

export default Star;
