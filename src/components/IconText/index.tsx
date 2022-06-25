import {Button, FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './IconText.scss';

type IconTextProps = {
    handleClick: VoidFunction;
};

const IconText = ({handleClick}: IconTextProps) => {
    return (
        <InputGroup className="iconText">
            <FormControl placeholder="Search" aria-label="Search Βαr" />
            <Button className="buttonSearch" onClick={handleClick} size="lg" variant="outline-light" id="search-button">
                Search
            </Button>
        </InputGroup>
    );
};

export default IconText;
