import FormWrapper from '../../hocs/FormWrapper';
import {Col, Row} from 'react-bootstrap';
import {mockData} from '../../mockData';
import './Checkout.scss';

const Checkout = () => {
    return (
        <FormWrapper title="Checkout">
            <div className="checkout-container">
                <Row className="title-container">
                    <Col xs="auto">
                        <h4>Book</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>Title</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>Quantity</h4>
                    </Col>
                    <Col xs="auto">
                        <h4>Price</h4>
                    </Col>
                </Row>
                {mockData.map((item: any, index: number) => (
                    <Row className="justify-content-between align-items-center">
                        <Col xs="auto">
                            <img
                                src={`http://localhost:9000/books/avatar/${item._id}`}
                                alt={`${item.name}`}
                            />
                        </Col>
                        <Col xs="auto">{item.name}</Col>
                        <Col xs="auto">{item.quantity}</Col>
                        <Col xs="auto">{item.price}</Col>
                    </Row>
                ))}
            </div>
        </FormWrapper>
    );
};

export default Checkout;
