import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import initialBookState, { BookModel, getInitialFormModel } from './formModel';
import { Form, Formik } from 'formik';
// import './AddBook.scss';
import { useNavigate } from 'react-router';
import { postService } from '../../api';
import { getFormComponent } from '../../utilities/utilities';
import FormWrapper from '../../Layouts/FormWrapper';

const AddBook = () => {
    const navigate = useNavigate();

    const submitBook = (values: BookModel) => {
        return postService('/books', values).then(() => navigate('/'));
    };

    const options = [
        { code: '01', label: 'Action' },
        { code: '02', label: 'Science' },
        { code: '03', label: 'Fantasy' },
        { code: '04', label: 'Mystery' },
        { code: '05', label: 'Thriller' },
    ];

    const bookValuesWithOptions = getInitialFormModel(options);

    return (
        <FormWrapper title="Add a new Book">
            <Container>
                <Formik<BookModel>
                    initialValues={initialBookState}
                    validate={(values) => {
                        console.log(values);
                    }}
                    onSubmit={submitBook}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Container>
                                <Row className="align-items-center">
                                    {bookValuesWithOptions.map(
                                        (item, idx: number) => (
                                            <React.Fragment key={idx}>
                                                <Col xs={6}>
                                                    {getFormComponent(item)}
                                                </Col>
                                            </React.Fragment>
                                        )
                                    )}
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <Button
                                            variant="secondary"
                                            onClick={() => navigate('/')}
                                        >
                                            Cancel
                                        </Button>
                                    </Col>
                                    <Col xs={4}>
                                        <Button type="submit">Submit</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    )}
                </Formik>
            </Container>
        </FormWrapper>
    );
};

export default AddBook;
