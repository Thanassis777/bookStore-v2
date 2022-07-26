import {useCallback} from 'react';
import {Col, Row} from 'react-bootstrap';
import initialBookState, {BookModel, getInitialFormModel} from './formModel';
import {Form, Formik} from 'formik';
import {useNavigate} from 'react-router';
import {postService} from '../../api';
import {getFormComponent, uploadImage} from '../../shared/utilities';
import FormWrapper from '../../hocs/FormWrapper';
import FooterButtons from './FooterButtons';
import {formSchema} from './validationSchema';
import {useCategoriesData} from '../../store/categories';

const AddBook = () => {
    const [categories, categoriesLoaded] = useCategoriesData();

    const navigate = useNavigate();

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

    const handleCancelBtn = useCallback(() => navigate('/'), []);

    return (
        <FormWrapper title="Add a new Book">
            {categoriesLoaded && (
                <Formik<BookModel>
                    initialValues={initialBookState}
                    validationSchema={formSchema}
                    onSubmit={submitBook}
                >
                    {({handleSubmit}) => {
                        const bookValuesWithOptions = getInitialFormModel(categories);

                        return (
                            <Form onSubmit={handleSubmit}>
                                <Row className="align-items-center">
                                    <Row>
                                        {bookValuesWithOptions.map((item) => (
                                            <Col xs={12} sm={6} key={item.id}>
                                                {getFormComponent(item)}
                                            </Col>
                                        ))}
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
            )}
        </FormWrapper>
    );
};

export default AddBook;
