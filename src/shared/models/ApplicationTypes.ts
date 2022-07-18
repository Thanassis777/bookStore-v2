export enum Types {
    RATING,
    DROPDOWN,
    MULTI_VALUE,
    DROPZONE,
    DATE = 'date',
}

export enum ToastTypes {
    SUCCESS,
    ERROR,
    INFO,
    WARNING,
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
