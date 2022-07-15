import './CartItem.scss';

const CartItem = (props: any) => {
    const {_id, price, name, quantity} = props;

    return (
        <div className="cart-item-container">
            <img src={`http://localhost:9000/books/avatar/${_id}`} alt={`${name}`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
