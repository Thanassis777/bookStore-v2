import {Col, Container, Row} from 'react-bootstrap';
import Header from '../components/UI/Header/Header';

type FormWrapperProps = {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
};

const FormWrapper = ({children, title, subtitle}: FormWrapperProps) => {
    return (
        <Container>
            <Row className="m-auto mt-3 container-fluid">
                <Col>
                    {title && <Header title={title} />}
                    {subtitle && <span>{subtitle}</span>}
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormWrapper;
