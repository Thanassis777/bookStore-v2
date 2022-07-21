import {Spinner} from 'react-bootstrap';
import {SpinnerProps} from 'react-bootstrap/Spinner';

const LoadingSpinner = (props: Partial<SpinnerProps>) => (
    <Spinner variant="success" animation="border" role="status" {...props}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>
);

export default LoadingSpinner;
