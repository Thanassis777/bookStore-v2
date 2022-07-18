import {BookModel} from '../AddBook/formModel';
import Header from '../../components/UI/Header/Header';
import {Button, Col, Row} from 'react-bootstrap';

const BookDetails = (book: BookModel) => {
    return (
        <>
            <Header title={book.title} />
            <div className="gap-container">
                <span>{book.subtitle}</span>
            </div>
            <div className="gap-container">
                <Button>Favourite</Button>
                <Button>Share</Button>
            </div>
            <div className="gap-container">
                <Row>
                    <Col xs="auto">
                        <h6>Category:</h6>
                        <span>{book.category}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <h6>Year:</h6>
                        <span>{book.published}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <h6>Number of Pages:</h6>
                        <span>{book.pages}</span>
                    </Col>
                </Row>
            </div>
            <div className="gap-container">
                <Row>
                    <Col xs="auto">
                        <h6>Publisher:</h6>
                        <span>{book.publisher}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <h6>ISBN:</h6>
                        <span>{book.isbn}</span>
                    </Col>
                </Row>
            </div>
            <div className="gap-container">
                <Row>
                    <Col xs="auto">
                        <h6>Description:</h6>
                        {book.description}
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default BookDetails;
