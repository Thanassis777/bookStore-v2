import { CodeListType } from './ApplicationTypes';
import * as React from 'react';

export interface ComponentProps {
    label: string;
    id: string;
    name: string;
    type?: any;
    as?: React.ElementType | undefined;
    options?: CodeListType[];
    customValidation?: Function;
}
