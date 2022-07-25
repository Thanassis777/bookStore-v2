import {Button, FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './IconText.scss';
import {ChangeEvent} from 'react';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';

type IconTextProps = {
    setValue: (val: string) => void;
    setFilter: (val: string) => void;
    handleSearchButton: () => void;
    radioLabels: string[];
    filter: string;
};

const IconText = ({
    setValue,
    setFilter,
    radioLabels,
    handleSearchButton,
    filter,
}: IconTextProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        setFilter(value);
    };

    return (
        <>
            <InputGroup className="iconText">
                <FormControl
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSearchButton();
                    }}
                    onChange={handleChange}
                    placeholder="Search"
                    aria-label="Search Βαr"
                />
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
            <div className="mt-2 radios">
                {radioLabels.map((label) => (
                    <Form.Check
                        style={{fontFamily: 'cursive'}}
                        key={label}
                        inline
                        label={label}
                        onChange={onChangeValue}
                        checked={filter === label.toLowerCase()}
                        value={label.toLowerCase()}
                        name={label + '_name'}
                        type="radio"
                        id={label + '_id'}
                    />
                ))}
                <div onClick={() => setFilter('')} className="remove-filter">
                    <CloseButton />
                </div>
            </div>
        </>
    );
};

export default IconText;
