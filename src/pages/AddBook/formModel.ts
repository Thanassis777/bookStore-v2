export const RATING = 'rating';
export const DATE = 'date';

export interface FormModel {
    label: string;
    id: string;
    name: string;
    type?: string;
    as?: any;
    format?: string;
}

export interface BookModel {
    // ** category to be added **
    title: string;
    subtitle: string;
    isbn: string;
    pages: string;
    author: string;
    publisher: string;
    published: Date;
    rating: number;
    description: string;
}

const initialBookValues: BookModel = {
    title: '',
    subtitle: '',
    isbn: '',
    pages: '',
    author: '',
    publisher: '',
    published: new Date(),
    rating: 3,
    description: '',
};

export const initialFormState: FormModel[] = [
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
        type: DATE,
    },
    {
        label: 'Rating',
        id: 'rating',
        name: 'rating',
        type: RATING,
    },
    {
        label: 'Description',
        id: 'description',
        name: 'description',
        as: 'textarea',
    },
];

export default initialBookValues;
