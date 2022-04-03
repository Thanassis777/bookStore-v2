import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './IconText.scss';

type IconTextProps = {
    handleClick: () => void;
};

const IconText = ({ handleClick }: IconTextProps) => {
    return (
        <InputGroup className="iconText">
            <FormControl placeholder="Search" aria-label="Search Βαr" />
            <Button
                onClick={handleClick}
                size={'lg'}
                variant="outline-secondary"
                id="search-button"
            >
                Search
            </Button>
        </InputGroup>
    );
};

export default IconText;
