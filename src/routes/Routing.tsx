import {Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import BookInfo from '../pages/BookInfo';
import ProtectedRoute from './ProtectedRoute';
import Navigation from './Navigation';

const Routing = () => (
    <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route
                path="/add"
                element={
                    <ProtectedRoute checkAdmin>
                        <AddBook />
                    </ProtectedRoute>
                }
            />
            <Route path="/book-information/:id" element={<BookInfo />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/checkout"
                element={
                    <ProtectedRoute redirectPath={'/login'}>
                        <Checkout />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);

export default Routing;
