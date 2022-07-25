import {useRef, useState} from 'react';
import './Search.scss';
import {Col, Row} from 'react-bootstrap';
import {default as SearchBar} from '../../components/FormGroups/IconText';
import {getService} from '../../api';
import BookCard, {BookCardProps} from '../../components/UI/BookCard';
import {BookModel} from '../AddBook/formModel';
import {useAppDispatch} from '../../store/storeHooks';
import {addItem} from '../../store/checkout';
import {useNavigate} from 'react-router';
import {ToastUtils} from '../../shared/utilities';
import {ToastTypes} from '../../shared/models/ApplicationTypes';
import Pagination, {PAGE_SIZE} from '../../components/UI/Pagination';

export const ISBN = 'ISBN';
export const TITLE = 'Title';
export const RATING = 'Rating';
export const CATEGORY = 'Category';
export const AUTHOR = 'Author';

const radioLabels = [ISBN, TITLE, RATING, CATEGORY, AUTHOR];

const Search = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState<BookCardProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const [searchText, setSearchText] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    const focusRef = useRef(null);

    const searchAll = (page?: number) => {
        const url = page > 0 ? `/books?page=${page}` : '/books';

        return getService(url).then((response) => {
            setData(response.data.results);
            setTotalCount(response.data.totalCount);
        });
    };

    const onSearchClick = (page?: number) => {
        if (searchText === '' && selectedFilter === '') return searchAll(page);

        let url = '';

        if (searchText) {
            url = `/books/search?${selectedFilter}=${searchText}`;
        }

        return getService(url).then((response) => {
            setData(response.data.results);
            setTotalCount(response.data.totalCount);
        });
    };

    const handlePageChange = (page: number) => {
        focusRef?.current?.scrollIntoView({behavior: 'smooth'});
        setCurrentPage(page);

        onSearchClick(page);
    };

    const addBookToCart = (book: BookModel) => {
        const addedBook = {...book, amount: ++book.amount};

        dispatch(addItem(addedBook));
        ToastUtils.notifyToast(ToastTypes.INFO, 'Book added', {
            position: 'bottom-center',
        });
    };

    const onImageClick = (book: BookModel) => {
        navigate('/book-information', {state: book});
    };

    return (
        <>
            <Row className="bookCover">
                <Col>FREE AND DISCOUNTED BESTSELLERS</Col>
            </Row>
            <Row className="justify-content-center align-items-center searchBox">
                <Col>
                    <h3 ref={focusRef}>
                        <i>Search your new book in Library</i>
                    </h3>
                    <SearchBar
                        filter={selectedFilter}
                        radioLabels={radioLabels}
                        setValue={setSearchText}
                        setFilter={setSelectedFilter}
                        handleSearchButton={onSearchClick}
                    />
                </Col>
            </Row>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PAGE_SIZE}
                onPageChange={(page: number) => handlePageChange(page)}
            />
            <div className="mt-4 pb-5 products-container">
                {data &&
                    data.map((book) => {
                        const bookProps = {
                            handeImageClick: onImageClick.bind(null, book),
                            handeAddClick: addBookToCart.bind(null, book),
                            key: book._id,
                            ...book,
                        };

                        return <BookCard key={book._id} {...bookProps} />;
                    })}
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={PAGE_SIZE}
                onPageChange={(page: number) => handlePageChange(page)}
            />
        </>
    );
};

export default Search;
