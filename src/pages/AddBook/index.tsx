import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import initialBookState, { BookModel, getInitialFormModel } from './formModel';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { getService, postService } from '../../api';
import { getFormComponent } from '../../shared/utilities';
import FormWrapper from '../../Layouts/FormWrapper';
import FooterButtons from './FooterButtons';
import { formSchema } from './validationSchema';

const AddBook = () => {
    const navigate = useNavigate();
    const [options, setOptions] = useState([]);

    const submitBook = (values: BookModel) => {
        return postService('/books', values).then(() => {
            navigate('/');
        });
    };

    useEffect(() => {
        getService('/categories').then((response) => setOptions(response.data));
    }, []);

    const handleCancelBtn = useCallback(() => navigate('/'), []);

    return (
        <FormWrapper title="Add a new Book">
            <Formik<BookModel>
                initialValues={initialBookState}
                validationSchema={formSchema}
                onSubmit={submitBook}
            >
                {({ handleSubmit, values, errors }) => {
                    console.log(values);
                    console.log('-->', errors);
                    const bookValuesWithOptions = getInitialFormModel(options);

                    return (
                        <Form onSubmit={handleSubmit}>
                            <Row className="align-items-center">
                                <Row>
                                    {bookValuesWithOptions.map(
                                        (item, idx: number) => (
                                            <Col xs={6} key={idx}>
                                                {getFormComponent(item)}
                                            </Col>
                                        )
                                    )}
                                </Row>
                            </Row>
                            <Row className="mt-3 justify-content-between">
                                <FooterButtons
                                    handleCancel={handleCancelBtn}
                                    handleSubmit={handleSubmit}
                                />
                            </Row>
                        </Form>
                    );
                }}
            </Formik>
        </FormWrapper>
    );
};

export default AddBook;
