export enum Types {
    RATING = 'rating',
    DATE = 'date',
    DROPDOWN = 'dropdown',
    MULTI_VALUE = 'multi-value',
    DROPZONE = 'dropzone',
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
