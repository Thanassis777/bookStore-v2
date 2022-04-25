import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home/'));
const Search = React.lazy(() => import('../pages/Search'));
const AddBook = React.lazy(() => import('../pages/AddBook'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const Routing = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default Routing;
