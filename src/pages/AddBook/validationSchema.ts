import * as Yup from 'yup';
import { FieldErrorMessages } from '../../shared/models/FieldErrorMessages';

export const formSchema = Yup.object().shape({
    isbn: Yup.number()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .positive()
        .integer()
        .test(
            'maxDigits',
            FieldErrorMessages.ISBN,
            (number) => String(number).length === 10
        ),
    title: Yup.string()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .min(10, (val) => FieldErrorMessages.MIN_STRING_LENGTH + val.min)
        .max(120, (val) => FieldErrorMessages.MAX_STRING_LENGTH + val.max),
    subtitle: Yup.string()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .min(2, (val) => FieldErrorMessages.MIN_STRING_LENGTH + val.min)
        .max(50, (val) => FieldErrorMessages.MAX_STRING_LENGTH + val.max),
    pages: Yup.number()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .positive()
        .integer()
        .max(9999, FieldErrorMessages.PAGE_LIMIT),
    publisher: Yup.string()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .min(5, (val) => FieldErrorMessages.MIN_STRING_LENGTH + val.min)
        .max(60, (val) => FieldErrorMessages.MAX_STRING_LENGTH + val.max),
    published: Yup.date().required(FieldErrorMessages.MANDATORY_FIELD),
    rating: Yup.number()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .positive(FieldErrorMessages.RATING_EMPTY),
    description: Yup.string()
        .required(FieldErrorMessages.MANDATORY_FIELD)
        .max(512, (val) => FieldErrorMessages.MAX_STRING_LENGTH + val.max),
    category: Yup.array()
        .test({
            message: FieldErrorMessages.MANDATORY_FIELD,
            test: (arr) => arr.length !== 0,
        })
        .test({
            message: FieldErrorMessages.ARRAY_EXCEED_LENGTH,
            test: (arr) => arr.length < 5,
        }),
    author: Yup.array().test({
        message: FieldErrorMessages.MANDATORY_FIELD,
        test: (arr: string[]) => arr.length === 0,
    }),
    // Yup
    // .string()
    // .required(FieldErrorMessages.MANDATORY_FIELD)
    // .min(6, (val) => FieldErrorMessages.MIN_STRING_LENGTH + val.min),
});

export const validateAuthors = (value) => {
    console.log(value);
};
