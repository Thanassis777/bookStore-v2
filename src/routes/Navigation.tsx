import {ReactComponent as BookLogo} from '../assets/pile-book.svg';
import './Navigation.scss';
import CartIcon from '../components/UI/CartIcon';
import CartDropDown from '../components/UI/CartDropDown';
import {useAppDispatch, useAppSelector} from '../store/storeHooks';
import {
    checkoutData,
    clearCheckoutItems,
    isOpenCart,
    setIsOpenCart,
    totalAmount,
} from '../store/checkout';
import {Badge} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {clearUser, userData, userToken} from '../store/user';
import {JWTDecodeUtils, ToastUtils} from '../shared/utilities';
import {ToastTypes} from '../shared/models/ApplicationTypes';
import {Link, Outlet} from 'react-router-dom';

const Navigation = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const booksInCart = useAppSelector(checkoutData);
    const isOpen = useAppSelector(isOpenCart);
    const totalItems = useAppSelector(totalAmount);
    const token = useAppSelector(userToken);
    const user = useAppSelector(userData);

    const role = JWTDecodeUtils.getTokenField(token, 'role');

    const handleCartIcon = () => dispatch(setIsOpenCart(!isOpen));

    const onCheckoutCLick = () => {
        if (role === null)
            return ToastUtils.notifyToast(
                ToastTypes.INFO,
                'You must be logged in to check the cart'
            );

        dispatch(setIsOpenCart(false));
        navigate('/checkout');
    };

    const handleLogOut = () => {
        dispatch(clearUser());
        dispatch(clearCheckoutItems());
    };

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <BookLogo />
                </Link>
                <div className="links-container">
                    {role === 'admin' && (
                        <Link className="nav-link" to="/add">
                            ADD
                        </Link>
                    )}
                    <Link className="nav-link" to="/search">
                        SEARCH
                    </Link>
                    <Link id="login" onClick={handleLogOut} className="nav-link" to="/login">
                        {role ? `LOGOUT, ${user.name}` : 'LOGIN'}
                    </Link>
                    <CartIcon handleOpen={handleCartIcon} />
                    {totalItems > 0 && (
                        <Badge className="mx-1" pill bg="success">
                            {totalItems}
                        </Badge>
                    )}
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
