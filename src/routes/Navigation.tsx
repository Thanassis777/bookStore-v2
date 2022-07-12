import {Outlet, Link} from 'react-router-dom';
// @ts-ignore
import {ReactComponent as BookLogo} from '../assets/pile-book.svg';
import './Navigation.scss';

const Navigation = () => (
    <>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <BookLogo />
            </Link>
            <div className="links-container">
                <Link className="nav-link" to="/add">
                    Add
                </Link>
                <Link className="nav-link" to="/search">
                    Search
                </Link>
                <Link id="login" className="nav-link" to="/login">
                    Login
                </Link>
            </div>
        </div>
        <Outlet />
    </>
);

export default Navigation;
