import {useState} from 'react';
import './Search.scss';
import {Col, Row} from 'react-bootstrap';
import IconText from '../../components/IconText';
import {getService} from '../../api';

const Search = () => {
    const [data, setData] = useState([]);

    console.log(data);

    const handleClick = () => {
        // return getService('/books')
        return getService('/books/623e060286eae16fe3cbd92c', {responseType: 'arraybuffer'})
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <main style={{overflow: 'hidden'}}>
            <Row className="bookCover">
                <Col>FREE AND DISCOUNTED BESTSELLERS</Col>
            </Row>
            <Row className="justify-content-center align-items-center searchBox">
                <Col>
                    <IconText handleClick={handleClick} />
                </Col>
            </Row>
            <Row>
                <img src={'http://localhost:9000/books/623e060286eae16fe3cbd92c/avatar'} />
            </Row>
        </main>
    );
};

export default Search;
