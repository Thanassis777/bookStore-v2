import Select from 'react-select';
import {useField} from 'formik';
import {ReactSelectOptions} from '../../../shared/models/ApplicationTypes';
import Form from 'react-bootstrap/Form';
import {ComponentProps} from '../../../shared/models/ComponentProps';
import FieldErrorMessage from '../../FieldErrorMessage';
import {setBorderColor, setBoxShadow} from './utility';
import {Palette} from '../../../shared/models/Palette';

const DropDown = (props: ComponentProps) => {
    const [field, meta, helpers] = useField(props.name);

    const isTouched = meta.touched;
    const hasError = Boolean(meta.error);
    const arrayLength = field.value.length;

    const customStyles = {
        control: (base: any, state: any) => ({
            ...base,
            backgroundColor: Palette.INPUT_BG_COLOR,
            height: 56,
            borderColor: setBorderColor(isTouched, hasError, arrayLength),
            boxShadow: setBoxShadow(state.isFocused, hasError, arrayLength, isTouched),
            '&:hover': {
                borderColor: 'none',
            },
        }),
    };

    const data = props.options?.map((item) => ({
        value: item.code,
        label: item.label,
    }));

    const handeChange = (selectedOption: ReactSelectOptions[]) => {
        helpers.setTouched(true);
        helpers.setValue(selectedOption.map((opt) => opt.value));
    };

    return (
        <div>
            <Form.Floating className="mt-3">
                <Select
                    classNamePrefix="select"
                    isClearable
                    isMulti
                    onBlur={() => helpers.setTouched(true)}
                    onChange={handeChange}
                    styles={customStyles}
                    placeholder={props.label}
                    options={data}
                />
            </Form.Floating>
            <FieldErrorMessage name={field.name} />
        </div>
    );
};

export default DropDown;
