export enum Types {
    RATING = 'rating',
    DATE = 'date',
    DROPDOWN = 'dropdown',
}

export interface CodeListType {
    code: string;
    label: string;
}

export interface ReactSelectOptions {
    value: string;
    label: string;
}

export const initialCodeList: CodeListType = {
    code: '',
    label: '',
};
