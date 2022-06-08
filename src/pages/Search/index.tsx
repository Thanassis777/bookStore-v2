import React from 'react';
import './Search.scss';
import { Col, Row } from 'react-bootstrap';
import IconText from '../../components/IconText';
import { getService } from '../../api';

const Search = () => {
    const handleClick = () => {
        return getService('/books')
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <main style={{ overflow: 'hidden' }}>
            <Row className="bookCover">
                <Col>FREE AND DISCOUNTED BESTSELLERS</Col>
            </Row>
            <Row className="justify-content-center align-items-center searchBox">
                <Col>
                    <IconText handleClick={handleClick} />
                </Col>
            </Row>
        </main>

        // <section>
        //     <div className="bookCover">
        //         <div>FREE AND DISCOUNTED BESTSELLERS</div>
        //     </div>
        //     <div className="searchBox">
        //         <IconText handleClick={handleClick} />
        //     </div>
        // </section>
    );
};

export default Search;
