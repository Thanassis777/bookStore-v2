import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const Search = React.lazy(() => import('./pages/Search'));
const AddBook = React.lazy(() => import('./pages/AddBook'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Layout = React.lazy(() => import('./Layout'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/search" exact element={<Search />} />
            <Route path="/add" exact element={<AddBook />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
