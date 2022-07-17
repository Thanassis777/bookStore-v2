import * as Yup from 'yup';
import {FieldErrorMessages} from '../../shared/models/FieldErrorMessages';

const signInSchema = {
    email: Yup.string()
        .email(FieldErrorMessages.INVALID_EMAIL)
        .required(FieldErrorMessages.MANDATORY_FIELD),
    password: Yup.string()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .min(7, (val) => FieldErrorMessages.MIN_STRING_LENGTH + val.min),
};

export const signUpSchema = {
    ...signInSchema,
    confirmPassword: Yup.string()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .min(7, (val) => FieldErrorMessages.MIN_STRING_LENGTH + val.min)
        .test('match', 'Incorrect password', function (currPassword) {
            return currPassword === this.parent.password;
        }),
    name: Yup.string().required(FieldErrorMessages.MANDATORY_FIELD),
};

export const signInFormValidationSchema = Yup.object().shape(signInSchema);
export const signUpFormValidationSchema = Yup.object().shape(signUpSchema);
