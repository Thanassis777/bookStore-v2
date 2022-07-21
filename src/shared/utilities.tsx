import StarsRating from '../components/FormGroups/StarsRating/StarsRating';
import DropDown from '../components/FormGroups/DropDown/DropDown';
import TextInput from '../components/FormGroups/TextInput';
import {ToastTypes, Types} from './models/ApplicationTypes';
import {ComponentProps} from './models/ComponentProps';
import TextInputMultiValue from '../components/FormGroups/TextInputMultiValue';
import DropZone from '../components/FormGroups/DropZone';
import {postService} from '../api';
import {Theme, toast} from 'react-toastify';
import {ToastOptions} from 'react-toastify/dist/types';

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

const toastConfig: ToastOptions = {
    position: 'bottom-left',
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored' as Theme,
};

export const notifyToast = (type: ToastTypes, message: string, customOptions?: ToastOptions) => {
    let toastFn;

    const configs = {
        ...toastConfig,
        ...customOptions,
    };

    switch (type) {
        case ToastTypes.SUCCESS:
            toastFn = () => toast.success(message, configs);
            break;
        case ToastTypes.ERROR:
            toastFn = () => toast.error(message, configs);
            break;
        case ToastTypes.INFO:
            toastFn = () => toast.info(message, configs);
            break;
        case ToastTypes.WARNING:
            toastFn = () => toast.warn(message, configs);
            break;
        default:
            toastFn = null;
    }

    return toastFn();
};
