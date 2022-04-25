import React from 'react';
import TextInput from '../../components/TextInput';
import { Button, Col, Container, Row } from 'react-bootstrap';
import initialBookValues, {
    BookModel,
    initialFormState,
    RATING,
} from './formModel';
import { Form, Formik } from 'formik';
import StarsRating from '../../components/StarsRating/StarsRating';
import './AddBook.scss';
import { useNavigate } from 'react-router';
import { postService } from '../../api';

const AddBook = () => {
    const navigate = useNavigate();

    const submitBook = (values: BookModel) => {
        return postService('/books', values).then(() => navigate('/'));
    };

    console.log(initialBookValues);

    return (
        <Container className="container">
            <Formik<BookModel>
                initialValues={initialBookValues}
                validate={(values) => {}}
                onSubmit={submitBook}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <h1 style={{ textAlign: 'center' }}>
                                Add a new Book
                            </h1>
                        </Row>
                        <Row className="align-items-center">
                            {initialFormState.map((item, idx: number) => (
                                <React.Fragment key={idx}>
                                    <Col xs={6}>
                                        {item?.type !== RATING ? (
                                            <TextInput {...item} />
                                        ) : (
                                            <StarsRating {...item} />
                                        )}
                                    </Col>
                                </React.Fragment>
                            ))}
                        </Row>
                        <Row className="justify-content-end">
                            <Col>
                                <Button onClick={() => navigate('/')}>
                                    Cancel
                                </Button>
                            </Col>
                            <Col>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default AddBook;
