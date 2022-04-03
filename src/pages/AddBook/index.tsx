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

const AddBook = () => {
    return (
        <Container className="container">
            <Formik<BookModel>
                initialValues={initialBookValues}
                validate={(values) => {
                    // console.log(values);
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
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
                        <h1 style={{ textAlign: 'center' }}>Add a new Book</h1>
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
                        <Row>
                            <Button type="submit">Submit</Button>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default AddBook;
