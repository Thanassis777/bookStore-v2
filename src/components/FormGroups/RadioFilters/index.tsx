import './RadioFilters.scss';
import {ChangeEvent} from 'react';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';

type RadioFiltersProps = {
    setFilter: (val: string) => void;
    radioLabels: string[];
    filter: string;
    resetData: () => void;
};

const RadioFilters = ({setFilter, radioLabels, filter, resetData}: RadioFiltersProps) => {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        setFilter(value);
        resetData();
    };

    return (
        <>
            <div className="mt-2 radios">
                {radioLabels.map((label) => (
                    <Form.Check
                        style={{fontFamily: 'cursive'}}
                        key={label}
                        inline
                        label={label.toUpperCase()}
                        onChange={onChangeValue}
                        checked={filter === label}
                        value={label}
                        name={label + '_name'}
                        type="radio"
                        id={label + '_id'}
                    />
                ))}
                <div
                    onClick={() => {
                        setFilter('');
                        resetData();
                    }}
                    className="remove-filter"
                >
                    <CloseButton />
                </div>
            </div>
        </>
    );
};

export default RadioFilters;
