import {CodeListType, Types} from '../../shared/models/ApplicationTypes';
import {ComponentProps} from '../../shared/models/ComponentProps';

export type MultiValueString = {
    name: string;
};

export interface BookModel {
    _id?: string;
    title: string;
    subtitle: string;
    isbn: string;
    pages: string;
    price: string;
    amount: number;
    authors: MultiValueString[];
    publisher: string;
    published: Date | string;
    rating: number;
    description: string;
    category: CodeListType[];
    avatar: File[];
}

const initialBookState: BookModel = {
    title: '',
    subtitle: '',
    isbn: '',
    pages: '',
    price: '',
    amount: 0,
    authors: [{name: ''}],
    publisher: '',
    published: '',
    rating: 0,
    description: '',
    category: [],
    avatar: [],
};

export const getInitialFormModel = (categoryOptions: CodeListType[]): ComponentProps[] => [
    {
        label: 'Title',
        id: 'title',
        name: 'title',
    },
    {
        label: 'Subtitle',
        id: 'subtitle',
        name: 'subtitle',
    },
    {
        label: 'ISBN',
        id: 'isbn',
        name: 'isbn',
        type: 'number',
    },
    {
        label: 'Pages',
        id: 'pages',
        name: 'pages',
        type: 'number',
    },
    {
        label: 'Price',
        id: 'price',
        name: 'price',
        type: 'number',
    },
    {
        label: 'Category',
        id: 'category',
        name: 'category',
        type: Types.DROPDOWN,
        options: categoryOptions,
    },
    {
        label: 'Publisher',
        id: 'publisher',
        name: 'publisher',
    },
    {
        label: 'Published',
        id: 'published',
        name: 'published',
        type: Types.DATE,
    },
    {
        label: 'Author',
        id: 'authors',
        name: 'authors',
        type: Types.MULTI_VALUE,
    },
    {
        label: 'Description',
        id: 'description',
        name: 'description',
        as: 'textarea',
    },
    {
        label: 'Rating',
        id: 'rating',
        name: 'rating',
        type: Types.RATING,
    },
    {
        label: 'Avatar',
        id: 'avatar',
        name: 'avatar',
        type: Types.DROPZONE,
    },
];

export default initialBookState;
