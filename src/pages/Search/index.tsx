import {useState} from 'react';
import './Search.scss';
import {Col, Row} from 'react-bootstrap';
import IconText from '../../components/IconText';
import {getService} from '../../api';

const radioLabels = ['Category', 'Year', 'Author'];

const Search = () => {
    const [data, setData] = useState([]);

    console.log(data);

    const handleClick = (value: string, filter: string) => {
        // return getService('/books')
        console.log(value, filter);
        getService('/books/623e060286eae16fe3cbd92c', {responseType: 'arraybuffer'})
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    };

    // const [selectedFilter, setSelectedFilter] = useState('');
    //
    // const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     const {value} = e.target;
    //
    //     setSelectedFilter(value);
    // };

    return (
        <main style={{overflow: 'hidden'}}>
            <Row className="bookCover">
                <Col>FREE AND DISCOUNTED BESTSELLERS</Col>
            </Row>
            <Row className="justify-content-center align-items-center searchBox">
                <Col>
                    <h3>
                        <i>Search to find your new book</i>
                    </h3>

                    <IconText radioLabels={radioLabels} handleClick={handleClick} />
                </Col>
            </Row>
            <Row>{/*<img src={'http://localhost:9000/books/avatar/623e060286eae16fe3cbd92c'} />*/}</Row>
        </main>
    );
};

export default Search;
