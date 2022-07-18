import FormWrapper from '../../hocs/FormWrapper';
import {Col, Row} from 'react-bootstrap';
import './BookInfo.scss';
import {Navigate, useLocation} from 'react-router';
import {BookModel} from '../AddBook/formModel';
import ImageSection from './ImageSection';
import BookDetails from './BookDetails';

const BookInfo = () => {
    const location = useLocation();

    const book = location.state as BookModel;

    if (!book) return <Navigate to="/" />;

    return (
        <FormWrapper>
            {book && (
                <Row className="justify-content-center">
                    <Col className="mt-2" xs={6}>
                        <ImageSection {...book} />
                    </Col>
                    <Col xs={6}>
                        <BookDetails {...book} />
                    </Col>
                </Row>
            )}
        </FormWrapper>
    );
};

export default BookInfo;
