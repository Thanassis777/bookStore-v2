import {Route, Routes} from 'react-router-dom';

import Navigation from './Navigation';
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import BookInfo from '../pages/BookInfo';

const Routing = () => (
    <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/book-information" element={<BookInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);

export default Routing;
