import React from 'react';
import { Card, Row } from 'react-bootstrap';

const Header = ({ title }) => {
    return (
        <Row>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
        </Row>
    );
};

export default Header;
