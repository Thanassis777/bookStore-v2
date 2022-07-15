import {Link, Outlet} from 'react-router-dom';
// @ts-ignore
import {ReactComponent as BookLogo} from '../assets/pile-book.svg';
import './Navigation.scss';
import CartIcon from '../components/UI/CartIcon';
import CartDropDown from '../components/UI/CartDropDown';
import {useState} from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <CartIcon handleOpen={() => setIsOpen(!isOpen)} />
                    {isOpen && <CartDropDown />}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
