import React from 'react';
import Form from 'react-bootstrap/Form';
import {Field, FieldArray, useField} from 'formik';
import {ComponentProps} from '../../shared/models/ComponentProps';
import './TextInputMultiValue.scss';
import {Button} from 'react-bootstrap';
import {MultiValueString} from '../../pages/AddBook/formModel';
import FieldErrorMessage from '../FieldErrorMessage';
import {FieldErrorMessages} from '../../shared/models/FieldErrorMessages';

interface TextInputProps extends ComponentProps {
    placeholder?: string;
}

const TextInputMultiValue = (props: TextInputProps) => {
    const [field, , helpers] = useField<MultiValueString[]>(props.name);
    const values = field.value;

    const addButton = () => helpers.setValue([...values, {name: ''}]);

    const deleteButton = (index: number) => {
        const result = values.filter((val: any, idx: number) => idx !== index);

        helpers.setValue(result);
    };

    const addBtnMargin = values.length > 1 ? 'mx-1' : 'ms-1';
    const isAddBtnDisabled = values.length === 3;

    return (
        <FieldArray
            name={props.name}
            render={() => (
                <>
                    {values.length > 0 &&
                        values.map((val, idx) => (
                            <React.Fragment key={idx}>
                                <Field name={`${props.name}.${idx}.name`}>
                                    {({meta, field}: any) => (
                                        <>
                                            <Form.Floating className="d-flex mt-3">
                                                <Form.Control
                                                    {...field}
                                                    id={props.id}
                                                    value={val.name}
                                                    className="textInput"
                                                    isInvalid={meta.touched && Boolean(meta.error && meta.error[idx])}
                                                    isValid={meta.touched && !Boolean(meta.error && meta.error[idx])}
                                                    onBlur={field.onBlur}
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
                                            <FieldErrorMessage name={`${props.name}.${idx}.name`} />
                                        </>
                                    )}
                                </Field>
                            </React.Fragment>
                        ))}
                    {values.length == 3 && <div className="infoMessage">{FieldErrorMessages.MAX_AUTHORS}</div>}
                </>
            )}
        />
    );
};

export default TextInputMultiValue;
