import {Button, FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './IconText.scss';
import {ChangeEvent, useState} from 'react';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';

type IconTextProps = {
    handleClick: (text: string, string: string) => void;
    radioLabels: string[];
};

const IconText = ({handleClick, radioLabels}: IconTextProps) => {
    const [searchText, setSearchText] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleSearchButton = () => {
        handleClick(searchText, selectedFilter);
    };

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        setSelectedFilter(value);
    };

    return (
        <>
            <InputGroup className="iconText">
                <FormControl onChange={handleChange} placeholder="Search" aria-label="Search Βαr" />
                <Button
                    className="buttonSearch"
                    onClick={handleSearchButton}
                    size="lg"
                    variant="outline-light"
                    id="search-button"
                >
                    Search
                </Button>
            </InputGroup>
            <div className="mt-1 radios">
                {radioLabels.map((label) => (
                    <Form.Check
                        style={{fontFamily: 'cursive'}}
                        key={label}
                        inline
                        label={label}
                        onChange={onChangeValue}
                        checked={selectedFilter === label}
                        value={label}
                        name={label + '_name'}
                        type="radio"
                        id={label + '_id'}
                    />
                ))}
                <div onClick={() => setSelectedFilter('')} className="remove-filter">
                    <CloseButton />
                </div>
            </div>
        </>
    );
};

export default IconText;
