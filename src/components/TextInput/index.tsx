import React from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';
import { ComponentProps } from '../../shared/models/ComponentProps';
import './TextInput.scss';
import FieldErrorMessage from '../FieldErrorMessage';

interface TextInputProps extends ComponentProps {
    placeholder?: string;
}

const TextInput = (props: TextInputProps) => {
    const [field, meta] = useField(props.name);

    const customStyle = {
        height: props?.as === 'textarea' && 120,
        backgroundColor: 'rgb(245 247 249)',
    };

    return (
        <>
            <Form.Floating className="mt-3">
                <Form.Control
                    style={customStyle}
                    isInvalid={meta.touched && Boolean(meta.error)}
                    isValid={meta.touched && !Boolean(meta.error)}
                    placeholder={props.label}
                    {...field}
                    {...props}
                />
                <label htmlFor={props.id}>{props.label}</label>
            </Form.Floating>
            <FieldErrorMessage name={field.name} />
        </>
    );
};

export default TextInput;
