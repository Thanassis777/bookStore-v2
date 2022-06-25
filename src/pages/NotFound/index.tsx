import './NotFound.scss';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="errorImage">
            <Button onClick={() => navigate('/')}>Return to home page</Button>
        </div>
    );
};

export default NotFound;
