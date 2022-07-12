import {Col, Container, Row} from 'react-bootstrap';
import Header from '../components/Header/Header';

type FormWrapperProps = {
    children: React.ReactNode;
    title?: string;
};

const FormWrapper = ({children, title}: FormWrapperProps) => {
    return (
        <Container>
            {title && (
                <Row className="mt-3">
                    <Col>
                        <Header title={title} />
                    </Col>
                </Row>
            )}
            <Row className="m-auto container-fluid">
                <Col>{children}</Col>
            </Row>
        </Container>
    );
};

export default FormWrapper;
