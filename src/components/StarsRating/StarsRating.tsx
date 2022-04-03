import React from 'react';
import { Field } from 'formik';

import Stars from './Stars/Stars';
import { FormModel } from '../../pages/AddBook/formModel';

const StarsRating = (props: FormModel) => (
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
            </div>
        )}
    </Field>
);

export default StarsRating;
