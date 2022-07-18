import {Link, Outlet} from 'react-router-dom';
// @ts-ignore
import {ReactComponent as BookLogo} from '../assets/pile-book.svg';
import './Navigation.scss';
import CartIcon from '../components/UI/CartIcon';
import CartDropDown from '../components/UI/CartDropDown';
import {useAppDispatch, useAppSelector} from '../store/storeHooks';
import {checkoutData, isOpenCart, setIsOpenCart, totalAmount} from '../store/checkout';
import {Badge} from 'react-bootstrap';

const Navigation = () => {
    const dispatch = useAppDispatch();

    const booksInCart = useAppSelector(checkoutData);
    const isOpen = useAppSelector(isOpenCart);
    const totalItems = useAppSelector(totalAmount);

    const handleCartIcon = () => dispatch(setIsOpenCart(!isOpen));

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
                    <Link id="login" className="nav-link" to="/login">
                        LOGIN
                    </Link>
                    <CartIcon handleOpen={handleCartIcon} />
                    <Badge className="mx-1" pill bg="success">
                        {totalItems}
                    </Badge>
                    {isOpen && <CartDropDown items={booksInCart} />}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
