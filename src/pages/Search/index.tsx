import {ChangeEvent, useEffect, useRef, useState} from 'react';
import './Search.scss';
import {Button, Col, FormControl, Row} from 'react-bootstrap';
import {getService} from '../../api';
import BookCard, {BookCardProps} from '../../components/UI/BookCard';
import {BookModel} from '../AddBook/formModel';
import {useAppDispatch, useAppSelector} from '../../store/storeHooks';
import {addItem} from '../../store/checkout';
import {useNavigate} from 'react-router';
import {ToastUtils} from '../../shared/utilities';
import {ToastTypes} from '../../shared/models/ApplicationTypes';
import Pagination, {PAGE_SIZE} from '../../components/UI/Pagination';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {categoriesData} from '../../store/categories';
import RadioFilters from '../../components/FormGroups/RadioFilters';

export const ALL = 'all books';
export const TITLE = 'title';
export const RATING = 'rating';
export const CATEGORY = 'category';
export const AUTHOR = 'author';

const radioLabels = [ALL, TITLE, RATING, CATEGORY, AUTHOR];

const Search = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const categories = useAppSelector(categoriesData);

    const [data, setData] = useState<BookCardProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('00');
    const [selectedFilter, setSelectedFilter] = useState('');

    const focusRef = useRef(null);

    const fetchBooks = (url: string) => {
        getService(url).then((response) => {
            setData(response.data.results);
            setTotalCount(response.data.totalCount);
        });
    };

    useEffect(() => {
        if (currentPage >= 1) {
            if (selectedFilter === ALL) {
                fetchBooks(`/books?page=${currentPage}`);
            }
            if (selectedFilter === CATEGORY && category !== '00') {
                if (totalCount > 4) {
                    fetchBooks(`/books/search?${selectedFilter}=${category}&page=${currentPage}`);
                } else fetchBooks(`/books/search?${selectedFilter}=${category}`);
            } else if (
                selectedFilter &&
                searchText &&
                selectedFilter !== ALL &&
                selectedFilter !== CATEGORY
            ) {
                fetchBooks(`/books/search?${selectedFilter}=${searchText}&page=${currentPage}`);
            }
        }
    }, [currentPage, selectedFilter, category]);

    const onSearchClick = () => {
        let url = '';

        if (selectedFilter === ALL) {
            url = '/books';
            fetchBooks(url);
        } else if (searchText || selectedFilter === CATEGORY) {
            url = `/books/search?${selectedFilter}=${searchText}`;
            fetchBooks(url);
        }
    };

    const handlePageChange = (page: number) => {
        focusRef?.current?.scrollIntoView({behavior: 'smooth'});
        setCurrentPage(page);
    };

    const addBookToCart = (book: BookModel) => {
        const addedBook = {...book, amount: ++book.amount};

        dispatch(addItem(addedBook));
        ToastUtils.notifyToast(ToastTypes.INFO, 'Book added', {
            position: 'bottom-center',
        });
    };

    const onImageClick = (book: BookModel) => {
        navigate(`/book-information/${book._id}`, {state: book});
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };
    const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        const currentCategory = e.target.value;
        setCategory(currentCategory);
    };

    const displayCategories = [
        {
            code: '00',
            label: 'Select',
        },
        ...categories,
    ];

    const initializeData = () => {
        setData([]);
        setCategory('00');
        setSearchText('');
        setTotalCount(0);
        setCurrentPage(1);
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
                    <InputGroup className="iconText">
                        {selectedFilter === CATEGORY ? (
                            <Form.Select onChange={onChangeCategory} size="lg">
                                {displayCategories?.map((category) => (
                                    <option value={category.code} key={category.code}>
                                        {category.label}
                                    </option>
                                ))}
                            </Form.Select>
                        ) : (
                            <>
                                <FormControl
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') onSearchClick();
                                    }}
                                    disabled={selectedFilter === ALL}
                                    onChange={onChangeInput}
                                    value={searchText}
                                    placeholder="Search"
                                    aria-label="Search Βαr"
                                />
                                <Button
                                    className="buttonSearch"
                                    onClick={onSearchClick}
                                    size="lg"
                                    variant="outline-light"
                                    id="search-button"
                                >
                                    Search
                                </Button>
                            </>
                        )}
                    </InputGroup>
                    <RadioFilters
                        resetData={initializeData}
                        filter={selectedFilter}
                        setFilter={setSelectedFilter}
                        radioLabels={radioLabels}
                    />
                </Col>
            </Row>
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
