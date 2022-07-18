import {Col, Row} from 'react-bootstrap';
import Stars from '../../components/FormGroups/StarsRating/Stars/Stars';
import {BookModel} from '../AddBook/formModel';

interface ImageSectionProps extends BookModel {}

const ImageSection = (book: ImageSectionProps) => (
    <Row className="d-flex flex-column book-container">
        <Col>
            <img src={`http://localhost:9000/books/avatar/${book._id}`} alt={`${book.title}`} />
        </Col>
        <Col>
            <span>{book.title}</span>
        </Col>
        <Col>
            <span>{book.authors}</span>
        </Col>
        <Col>
            <span>{book.price}</span>
        </Col>
        <Col>
            <Stars count={book.rating} isReadonly />
        </Col>
    </Row>
);

export default ImageSection;
