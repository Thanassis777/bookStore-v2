import {
    CodeListType,
    initialCodeList,
} from '../../shared/model/applicationTypes';

export enum Types {
    RATING = 'rating',
    DATE = 'date',
    DROPDOWN = 'dropdown',
}

export interface FormModel {
    label: string;
    id: string;
    name: string;
    type?: string;
    as?: any;
    options?: CodeListType[];
}

export interface BookModel {
    title: string;
    subtitle: string;
    isbn: string;
    pages: string;
    author: string;
    publisher: string;
    published: Date;
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
    published: new Date(),
    rating: 0,
    description: '',
    category: [{ ...initialCodeList }],
};

export const getInitialFormModel = (categoryOptions: any): FormModel[] => [
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
    },
    {
        label: 'Pages',
        id: 'pages',
        name: 'pages',
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
