import React, { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';
import { ComponentProps } from '../../shared/models/ComponentProps';
import './TextInputMultiValue.scss';
import { Button } from 'react-bootstrap';
import FieldErrorMessage from '../FieldErrorMessage';

interface TextInputProps extends ComponentProps {
    placeholder?: string;
}

const TextInputMultiValue = (props: TextInputProps) => {
    const [field, meta, helpers] = useField(props.name);
    const values = field.value;

    const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
        const { value } = e.target;
        const newArray = Object.assign([], values, { [idx]: value });

        helpers.setValue(newArray);
    };

    const addButton = () => helpers.setValue([...values, '']);

    const deleteButton = (index: number) => {
        const result = [...values.slice(0, index), ...values.slice(index + 1)];

        helpers.setValue(result);
    };

    const addBtnMargin = values.length > 1 ? 'mx-1' : 'ms-1';
    const isAddBtnDisabled = values.length === 3;

    return (
        <>
            {values?.map((val: any, idx: number) => (
                <React.Fragment key={idx}>
                    <Form.Floating className="d-flex mt-3">
                        <Form.Control
                            value={val}
                            className="textInput"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleChange(e, idx)
                            }
                            isInvalid={meta.touched && Boolean(meta.error)}
                            isValid={meta.touched && !Boolean(meta.error)}
                            placeholder={props.label}
                        />
                        <label htmlFor={props.id}>{props.label}</label>
                        <Button
                            disabled={isAddBtnDisabled}
                            className={`${addBtnMargin} addButton`}
                            onClick={addButton}
                            size="lg"
                        >
                            +
                        </Button>
                        {values.length > 1 && (
                            <Button
                                className="deleteButton"
                                onClick={() => deleteButton(idx)}
                                size="lg"
                            >
                                -
                            </Button>
                        )}
                    </Form.Floating>
                    {val === '' && <FieldErrorMessage name={field.name} />}
                </React.Fragment>
            ))}
        </>
    );
};

export default TextInputMultiValue;
