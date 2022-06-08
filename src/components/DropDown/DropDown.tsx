import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import { ReactSelectOptions } from '../../shared/models/applicationTypes';
import Form from 'react-bootstrap/Form';
import { ComponentProps } from '../../shared/models/componentProps';
import FieldErrorMessage from '../FieldErrorMessage';

const DropDown = (props: ComponentProps) => {
    const [field, , helpers] = useField(props.name);

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
        helpers.setValue(selectedOption.map((opt) => opt.value));
    };

    return (
        <>
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
            <FieldErrorMessage name={field.name} />
        </>
    );
};

export default DropDown;
