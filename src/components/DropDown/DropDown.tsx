import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import { FormModel } from '../../pages/AddBook/formModel';
import { ReactSelectOptions } from '../../shared/model/applicationTypes';
import Form from 'react-bootstrap/Form';

const DropDown = (props: FormModel) => {
    const [, , helpers] = useField(props.name);

    const customStyles = {
        control: (base: any) => ({
            ...base,
            backgroundColor: 'rgb(245 247 249)',
            height: 56,
        }),
    };

    const data = props.options.map((item) => ({
        value: item.code,
        label: item.label,
    }));

    const handeChange = (selectedOption: ReactSelectOptions[]) => {
        helpers.setValue(selectedOption);
    };

    return (
        <Form.Floating className="mt-3">
            <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable
                isMulti
                onChange={handeChange}
                styles={customStyles}
                placeholder={props.label}
                options={data}
            />
        </Form.Floating>
    );
};

export default DropDown;
