import {useCallback, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import initialBookState, {BookModel, getInitialFormModel} from './formModel';
import {Form, Formik} from 'formik';
import {useNavigate} from 'react-router';
import {getService, postService} from '../../api';
import {getFormComponent, uploadImage} from '../../shared/utilities';
import FormWrapper from '../../Layouts/FormWrapper';
import FooterButtons from './FooterButtons';
import {formSchema} from './validationSchema';

const AddBook = () => {
    const navigate = useNavigate();
    const [options, setOptions] = useState([]);

    const submitBook = (values: BookModel) => {
        const newBook = {
            ...values,
            authors: values.authors.map((auth) => auth.name),
        };

        return postService('/books', newBook)
            .then((response) => {
                const {_id} = response.data;
                const formData = new FormData();

                formData.append('avatar', values.avatar[0]);
                return uploadImage(_id, formData);
            })
            .then(() => {
                navigate('/');
            });
    };

    useEffect(() => {
        getService('/categories').then((response) => setOptions(response.data));
    }, []);

    const handleCancelBtn = useCallback(() => navigate('/'), []);

    return (
        <FormWrapper title="Add a new Book">
            <Formik<BookModel> initialValues={initialBookState} validationSchema={formSchema} onSubmit={submitBook}>
                {({handleSubmit}) => {
                    const bookValuesWithOptions = getInitialFormModel(options);

                    return (
                        <Form onSubmit={handleSubmit}>
                            <Row className="align-items-center">
                                <Row>
                                    {bookValuesWithOptions.map((item, idx: number) => (
                                        <Col xs={6} key={idx}>
                                            {getFormComponent(item)}
                                        </Col>
                                    ))}
                                </Row>
                            </Row>
                            <Row className="mt-3 justify-content-between">
                                <FooterButtons handleCancel={handleCancelBtn} handleSubmit={handleSubmit} />
                            </Row>
                        </Form>
                    );
                }}
            </Formik>
        </FormWrapper>
    );
};

export default AddBook;
