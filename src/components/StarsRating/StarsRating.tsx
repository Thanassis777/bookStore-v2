import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import Stars from './Stars/Stars';
import { ComponentProps } from '../../shared/models/componentProps';
import Form from 'react-bootstrap/Form';
import FieldErrorMessage from '../FieldErrorMessage';

const StarsRating = (props: ComponentProps) => {
    const [field] = useField(props.name);

    return (
        <Form.Floating className="mt-4">
            <Field {...props} type="number">
                {({ field: { value }, form: { setFieldValue } }: any) => (
                    <div>
                        <label htmlFor={props.id} className="label-color">
                            {props.label}
                        </label>
                        <div>
                            <Stars
                                count={value}
                                handleClick={(number: number) =>
                                    setFieldValue(props.name, number)
                                }
                            />
                        </div>
                        <FieldErrorMessage name={field.name} />
                    </div>
                )}
            </Field>
        </Form.Floating>
    );
};

export default StarsRating;
