import {useDropzone} from 'react-dropzone';
import {useField} from 'formik';
import {ComponentProps} from '../../shared/models/ComponentProps';
import {Alert, Button} from 'react-bootstrap';
import FieldErrorMessage from '../FieldErrorMessage';
import './DropZone.scss';
import FileDetails from './FileDetails';
import {useCallback, useMemo} from 'react';
import {IconContext} from 'react-icons';
import {FaInfoCircle} from 'react-icons/fa';

const DropZone = (props: Partial<ComponentProps>) => {
    const [field, , helpers] = useField<File[]>(props.name);

    const files = useMemo(() => field.value, [field.value]);

    const {getRootProps, getInputProps, open} = useDropzone({
        noClick: true,
        accept: {
            'image/*': ['.jpeg', '.png', '.jpg'],
        },
        onDrop: (acceptedFiles) => {
            helpers.setValue(acceptedFiles);
        },
    });

    const removeFile = useCallback(
        (e: any) => {
            e.stopPropagation();
            helpers.setValue([]);
        },
        [helpers.setValue]
    );

    return (
        <section className="mt-3">
            <FileDetails files={files} removeFile={removeFile} />
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <Button variant="warning" onClick={open}>
                    Upload avatar
                </Button>
                <Alert style={{marginTop: '0.5em'}} variant="primary">
                    <IconContext.Provider value={{size: '2em', style: {marginRight: '0.5em'}}}>
                        <FaInfoCircle />
                        Only images files are allowed (.jpg, .png, .jpeg)
                    </IconContext.Provider>
                </Alert>
            </div>
            <FieldErrorMessage name={field.name} />
        </section>
    );
};

export default DropZone;
