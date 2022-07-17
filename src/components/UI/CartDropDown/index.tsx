import {Button} from 'react-bootstrap';
import CartItem from './CartItem';
import './CardDropDown.scss';
import {useNavigate} from 'react-router';
import {BookModel} from '../../../pages/AddBook/formModel';
import {setIsOpenCart} from '../../../store/checkout';
import {useAppDispatch} from '../../../store/storeHooks';
import {useRef} from 'react';
import useClickOutSideOfElement from '../../../shared/hooks/useClickOutSideOfElement';

type CartDropDownProps = {
    items: BookModel[];
};

const CartDropDown = ({items}: CartDropDownProps) => {
    const wrapperRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useClickOutSideOfElement(wrapperRef);

    const onCheckoutClick = () => {
        dispatch(setIsOpenCart(false));
        navigate('/checkout');
    };

    return (
        <div ref={wrapperRef} className="cart-dropdown-container">
            <div className="cart-items">
                {items.length ? (
                    items.map((item) => <CartItem key={item._id} {...item} />)
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button onClick={onCheckoutClick}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropDown;
