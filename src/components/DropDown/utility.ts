import { Palette } from '../../shared/models/Palette';

export const setBoxShadow = (
    isFocused: boolean,
    hasError: boolean,
    arrayLength: number,
    isTouched: boolean
): Palette => {
    let boxShadow;

    if (isFocused && arrayLength === 0) boxShadow = Palette.SHADOW_NORMAL;
    if (isFocused && !hasError && arrayLength > 0)
        boxShadow = Palette.SHADOW_SUCCESS;
    if (isFocused && hasError && isTouched) boxShadow = Palette.SHADOW_ERROR;

    return boxShadow;
};

export const setBorderColor = (
    isTouched: boolean,
    hasError: boolean,
    arrayLength: number
): Palette => {
    let borderColor = Palette.NORMAL;

    if (isTouched && hasError) borderColor = Palette.ERROR;
    else if (!hasError && arrayLength > 0) borderColor = Palette.SUCCESS;

    return borderColor;
};
