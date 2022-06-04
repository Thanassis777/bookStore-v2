import React from 'react';
import './Layout.scss';
import { Col, Container, Row } from 'react-bootstrap';

const Layout = ({ children }: any) => {
    return (
        <>
            <div className="box">
                <h1>BookStore</h1>
            </div>
            {children}
            <div id="footer" className="box" />
        </>
    );
};

export default Layout;
