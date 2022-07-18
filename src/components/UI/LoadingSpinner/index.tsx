import {Spinner} from 'react-bootstrap';

const LoadingSpinner = () => (
    <Spinner
        style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
        variant="success"
        animation="border"
        role="status"
    >
        <span className="visually-hidden">Loading...</span>
    </Spinner>
);

export default LoadingSpinner;
