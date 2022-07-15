import {Button} from 'react-bootstrap';
import CartItem from './CartItem';
import './CardDropDown.scss';
import {mockData} from '../../../mockData';
import {useNavigate} from 'react-router';

// type CartDropDownProps = {};

const CartDropDown = () => {
    const navigate = useNavigate();

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {mockData.length ? (
                    mockData.map((item: any, index: number) => <CartItem key={index} {...item} />)
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropDown;
