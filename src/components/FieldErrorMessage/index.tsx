import React from 'react';
import {ErrorMessage} from 'formik';
import './FieldErrorMessage.scss';

type FieldErrorMessageProps = {
    name: string;
};

type CustomErrorProps = {
    message: string;
};

const CustomError = ({message}: CustomErrorProps) => <div className="errorMessage">{message}</div>;

const FieldErrorMessage = ({name}: FieldErrorMessageProps) => (
    <ErrorMessage name={name}>
        {(msg) => {
            return <CustomError message={msg} />;
        }}
    </ErrorMessage>
);

export default FieldErrorMessage;
