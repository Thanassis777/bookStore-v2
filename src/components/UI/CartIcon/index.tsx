import {ReactComponent as Cart} from '../../../assets/cart.svg';
import './CartIcon.scss';

type CartIconProps = {
    handleOpen: () => void;
};

const CartIcon = ({handleOpen}: CartIconProps) => {
    return (
        <div className="cart-icon-container" onClick={handleOpen}>
            <Cart className="cart-icon" />
        </div>
    );
};

export default CartIcon;
