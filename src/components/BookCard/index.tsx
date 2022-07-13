import {BookModel} from '../../pages/AddBook/formModel';
import {Button} from 'react-bootstrap';
import './BookCard.scss';
import Stars from '../StarsRating/Stars/Stars';

export interface BookCardProps extends BookModel {
    _id: string;
}

const BookCard = (props: BookCardProps) => {
    return (
        <div className="product-card-container">
            <img src={`http://localhost:9000/books/avatar/${props._id}`} alt={`${props.title}`} />
            <div className="footer">
                <span className="name">{props.title}</span>
                <span className="mb-2">
                    <Stars count={props.rating} isReadonly />
                </span>
                <Button className="button-add">Add to card</Button>
            </div>
        </div>
    );
};

export default BookCard;
