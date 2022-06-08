import React from 'react';
import { ErrorMessage } from 'formik';
import './FieldErrorMessage.scss';

type FieldErrorMessageProps = {
    name: string;
};

const FieldErrorMessage = ({ name }: FieldErrorMessageProps) => (
    <ErrorMessage name={name}>
        {(msg) => <div className="errorMessage">{msg}</div>}
    </ErrorMessage>
);

export default FieldErrorMessage;
