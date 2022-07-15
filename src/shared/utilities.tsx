import StarsRating from '../components/FormGroups/StarsRating/StarsRating';
import DropDown from '../components/FormGroups/DropDown/DropDown';
import TextInput from '../components/FormGroups/TextInput';
import {Types} from './models/ApplicationTypes';
import {ComponentProps} from './models/ComponentProps';
import TextInputMultiValue from '../components/FormGroups/TextInputMultiValue';
import DropZone from '../components/FormGroups/DropZone';
import {postService} from '../api';

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
        case Types.DROPZONE:
            formComponent = <DropZone {...item} />;
            break;
        default:
            formComponent = <TextInput {...item} />;
    }

    return formComponent;
};

export const uploadImage = (id: string, data: any) => {
    return postService(`/books/avatar/upload/${id}`, data, {
        headers: {'Content-Type': 'multipart/form-data'},
    });
};
