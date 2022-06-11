import {
    CodeListType,
    initialCodeList,
    Types,
} from '../../shared/models/ApplicationTypes';
import { ComponentProps } from '../../shared/models/ComponentProps';

export interface BookModel {
    title: string;
    subtitle: string;
    isbn: string;
    pages: string;
    author: string;
    publisher: string;
    published: Date | string;
    rating: number;
    description: string;
    category: CodeListType[];
}

const initialBookState: BookModel = {
    title: '',
    subtitle: '',
    isbn: '',
    pages: '',
    author: '',
    publisher: '',
    published: '',
    rating: -1,
    description: '',
    category: [],
};

export const getInitialFormModel = (
    categoryOptions: CodeListType[]
): ComponentProps[] => [
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
        label: 'Author',
        id: 'author',
        name: 'author',
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
        label: 'Category',
        id: 'category',
        name: 'category',
        type: Types.DROPDOWN,
        options: categoryOptions,
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
];

export default initialBookState;
