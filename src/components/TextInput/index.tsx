import React from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';
import { FormModel } from '../../pages/AddBook/formModel';

interface TextInputProps extends FormModel {
    placeholder?: string;
}

const TextInput = (props: TextInputProps) => {
    const [field] = useField(props.name);

    const customStyle = {
        maxWidth: '28.5rem',
        height: props?.as === 'textarea' && 120,
        backgroundColor: 'rgb(245 247 249)',
    };

    return (
        <Form.Floating className="mt-3">
            <Form.Control
                {...field}
                {...props}
                style={customStyle}
                placeholder={props.label}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </Form.Floating>
    );
};

export default TextInput;
