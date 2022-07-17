import {BookModel} from '../../../pages/AddBook/formModel';
import {Button} from 'react-bootstrap';
import './BookCard.scss';
import Stars from '../../FormGroups/StarsRating/Stars/Stars';

export interface BookCardProps extends BookModel {
    _id: string;
    handeAddClick: () => void;
}

const BookCard = ({_id, title, rating, price, handeAddClick}: BookCardProps) => {
    return (
        <div className="product-card-container">
            <img src={`http://localhost:9000/books/avatar/${_id}`} alt={`${title}`} />
            <div className="footer">
                <span className="name">{title}</span>
                <span className="price">{price} €</span>
                <span className="mb-2">
                    <Stars count={rating} isReadonly />
                </span>
                <Button onClick={handeAddClick}>Add to card</Button>
            </div>
        </div>
    );
};

export default BookCard;
