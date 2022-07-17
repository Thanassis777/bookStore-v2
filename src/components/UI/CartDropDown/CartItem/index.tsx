import './CartItem.scss';
import {BookModel} from '../../../../pages/AddBook/formModel';

// interface CartItemProps extends Pick<BookModel, "price" | "title">, BookID
type CartItemProps = Pick<BookModel, 'title' | 'price' | '_id' | 'amount'>;

const CartItem = ({_id, price, title, amount}: CartItemProps) => {
    return (
        <div className="cart-item-container">
            <img src={`http://localhost:9000/books/avatar/${_id}`} alt={`${title}`} />
            <div className="item-details">
                <span className="name">{title}</span>
                <span className="price">
                    {amount} x {price}€
                </span>
                <span className="price">{price}€</span>
            </div>
        </div>
    );
};

export default CartItem;
