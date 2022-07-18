import {BookModel} from '../../../pages/AddBook/formModel';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './BookCard.scss';
import Stars from '../../FormGroups/StarsRating/Stars/Stars';

export interface BookCardProps extends BookModel {
    handeAddClick: () => void;
    handeImageClick: () => void;
}

const BookCard = ({_id, title, rating, price, handeAddClick, handeImageClick}: BookCardProps) => (
    <div className="product-card-container">
        <OverlayTrigger
            key={'tooltip-id'}
            placement={'auto'}
            overlay={<Tooltip id={`tooltip-top`}>Click to see more information</Tooltip>}
        >
            <img
                onClick={handeImageClick}
                src={`http://localhost:9000/books/avatar/${_id}`}
                alt={`${title}`}
            />
        </OverlayTrigger>
        <div className="footer">
            <span className="name">{title}</span>
            <span className="price">{price} €</span>
            <span className="mb-2">
                <Stars count={rating} isReadonly />
            </span>
            <Button onClick={handeAddClick}>Add to cart</Button>
        </div>
    </div>
);

export default BookCard;
