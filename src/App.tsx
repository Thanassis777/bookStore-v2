import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Routing from './routes/Routing';
import Layout from './Layout';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <Routing />
                </Layout>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
