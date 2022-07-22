import {Button} from 'react-bootstrap';
import CartItem from './CartItem';
import './CardDropDown.scss';
import {BookModel} from '../../../pages/AddBook/formModel';
import {useRef} from 'react';
import useClickOutSideOfElement from '../../../shared/hooks/useClickOutSideOfElement';

type CartDropDownProps = {
    items: BookModel[];
    onCheckoutClick: () => void;
};

const CartDropDown = ({items, onCheckoutClick}: CartDropDownProps) => {
    const wrapperRef = useRef(null);

    useClickOutSideOfElement(wrapperRef);

    return (
        <div ref={wrapperRef} className="cart-dropdown-container">
            <div className="cart-items">
                {items.length ? (
                    items.map((item) => <CartItem key={item._id} {...item} />)
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button onClick={onCheckoutClick}>PREVIEW</Button>
        </div>
    );
};

export default CartDropDown;
