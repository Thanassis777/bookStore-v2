import React from 'react';
import { Button, Col } from 'react-bootstrap';

type FooterButtonsProps = {
    handleCancel: VoidFunction;
    handleSubmit: VoidFunction;
};

const FooterButtons = React.memo(
    ({ handleCancel, handleSubmit }: FooterButtonsProps) => (
        <>
            <Col xs="auto">
                <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
            </Col>
            <Col xs="auto">
                <Button onClick={handleSubmit} type="submit">
                    Submit
                </Button>
            </Col>
        </>
    )
);

export default FooterButtons;
