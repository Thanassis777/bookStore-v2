import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';

const Home = React.lazy(() => import('../pages/Home/'));
const Search = React.lazy(() => import('../pages/Search'));
const AddBook = React.lazy(() => import('../pages/AddBook'));
const Login = React.lazy(() => import('../pages/Login'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const Checkout = React.lazy(() => import('../pages/Checkout'));

const Routing = () => (
    <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);

export default Routing;
