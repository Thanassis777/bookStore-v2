import {BookModel} from '../AddBook/formModel';
import './CheckoutItem.scss';
import {useAppDispatch} from '../../store/storeHooks';
import {addItem, clearItem, removeItem} from '../../store/checkout';

type CheckoutItemProps = {
    bookItem: BookModel;
    key: string;
};

const CheckoutItem = (props: CheckoutItemProps) => {
    const {title, _id, price, amount} = props.bookItem;
    const dispatch = useAppDispatch();

    const clearItemHandler = () => {
        dispatch(clearItem(_id));
    };
    const addItemHandler = () => {
        dispatch(addItem(props.bookItem));
    };
    const removeItemHandler = () => {
        dispatch(removeItem(props.bookItem._id));
    };

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={`http://localhost:9000/books/avatar/${_id}`} alt={`${title}`} />
            </div>
            <span className="title"> {title} </span>
            <span className="amount">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className="value">{amount}</span>
                <div className="arrow" onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price} €</span>
            <div className="remove-button" onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
