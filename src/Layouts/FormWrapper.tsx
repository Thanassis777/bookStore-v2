import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import './FormWrapper.scss';

type FormWrapperProps = {
    children: any;
    title: string;
};

const FormWrapper = ({ children, title }: FormWrapperProps) => {
    return (
        <Container>
            <Row>
                <Header title={title} />
            </Row>
            <Row>
                <Col>{children}</Col>
            </Row>
        </Container>
    );
};

export default FormWrapper;
