import React from 'react';
import './Search.scss';
import { Container } from 'react-bootstrap';
import IconText from '../../components/IconText';
import { getService } from '../../api';

const Search = () => {
    const handleClick = () => {
        return getService('/books')
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <div className="bookCover">
                <div>FREE AND DISCOUNTED BESTSELLERS</div>
            </div>
            <div className="searchBox">
                <IconText handleClick={handleClick} />
            </div>
        </Container>
    );
};

export default Search;
