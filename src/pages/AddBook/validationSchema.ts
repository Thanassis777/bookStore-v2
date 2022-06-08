import * as Yup from 'yup';

const MANDATORY_FIELD = 'Field is mandatory';

export const formSchema = Yup.object().shape({
    isbn: Yup.number()
        .required(MANDATORY_FIELD)
        .positive()
        .integer()
        .test(
            'maxDigits',
            'ISBN must have exactly 10 digits',
            (number) => String(number).length === 10
        ),
    title: Yup.string()
        .required(MANDATORY_FIELD)
        .min(50, 'Title should have minimum 50 characters')
        .max(120, 'Title should have maximum 120 characters'),
    subtitle: Yup.string()
        .required(MANDATORY_FIELD)
        .min(2, 'Subtitle should have minimum 2 characters')
        .max(50, 'Subtitle should have maximum 50 characters'),
    pages: Yup.number()
        .required(MANDATORY_FIELD)
        .positive()
        .integer()
        .max(9999, 'Pages should be 9999 maximum'),
    publisher: Yup.string()
        .required(MANDATORY_FIELD)
        .min(5, 'Publisher should have minimum 5 characters')
        .max(60, 'Publisher should have maximum 60 characters'),
    published: Yup.date().required(MANDATORY_FIELD),
    rating: Yup.number()
        .required(MANDATORY_FIELD)
        .positive('Please select a rating star'),
    description: Yup.string()
        .required(MANDATORY_FIELD)
        .max(512, 'Title should have maximum 512 characters'),
    category: Yup.array().test({
        message: MANDATORY_FIELD,
        test: (arr) => arr.length !== 0,
    }),
    author: Yup.string()
        .required(MANDATORY_FIELD)
        .min(6, 'Field is too short - should be 6 chars minimum'),
});
