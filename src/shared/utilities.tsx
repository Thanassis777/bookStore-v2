import StarsRating from '../components/StarsRating/StarsRating';
import React from 'react';
import DropDown from '../components/DropDown/DropDown';
import TextInput from '../components/TextInput';
import { Types } from './models/ApplicationTypes';
import { ComponentProps } from './models/ComponentProps';
import TextInputMultiValue from '../components/TextInputMultiValue';

export const getFormComponent = (item: ComponentProps) => {
    let formComponent;

    switch (item.type) {
        case Types.RATING:
            formComponent = <StarsRating {...item} />;
            break;
        case Types.DROPDOWN:
            formComponent = <DropDown {...item} />;
            break;
        case Types.MULTI_VALUE:
            formComponent = <TextInputMultiValue {...item} />;
            break;
        default:
            formComponent = <TextInput {...item} />;
    }

    return formComponent;
};
