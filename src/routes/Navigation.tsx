import {Link, Outlet} from 'react-router-dom';
// @ts-ignore
import {ReactComponent as BookLogo} from '../assets/pile-book.svg';
import './Navigation.scss';
import CartIcon from '../components/UI/CartIcon';
import CartDropDown from '../components/UI/CartDropDown';
import {useAppDispatch, useAppSelector} from '../store/storeHooks';
import {checkoutData, isOpenCart, setIsOpenCart, totalAmount} from '../store/checkout';
import {Badge} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {clearUser, userData} from '../store/user';
import {notifyToast} from '../shared/utilities';
import {ToastTypes} from '../shared/models/ApplicationTypes';

const Navigation = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const booksInCart = useAppSelector(checkoutData);
    const isOpen = useAppSelector(isOpenCart);
    const totalItems = useAppSelector(totalAmount);
    const user = useAppSelector(userData);
    console.log(user);
    const handleCartIcon = () => dispatch(setIsOpenCart(!isOpen));

    const onCheckoutCLick = () => {
        if (!user)
            return notifyToast(ToastTypes.WARNING, 'You must be logged in to check the cart');

        dispatch(setIsOpenCart(false));
        navigate('/checkout');
    };

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <BookLogo />
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to="/add">
                        ADD
                    </Link>
                    <Link className="nav-link" to="/search">
                        SEARCH
                    </Link>
                    <Link
                        id="login"
                        onClick={() => dispatch(clearUser())}
                        className="nav-link"
                        to="/login"
                    >
                        {user ? 'LOGOUT' : 'LOGIN'}
                    </Link>
                    <CartIcon handleOpen={handleCartIcon} />
                    <Badge className="mx-1" pill bg="success">
                        {totalItems}
                    </Badge>
                    {isOpen && (
                        <CartDropDown onCheckoutClick={onCheckoutCLick} items={booksInCart} />
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
