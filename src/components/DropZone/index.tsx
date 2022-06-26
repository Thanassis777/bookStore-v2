import {useDropzone} from 'react-dropzone';
import {useField} from 'formik';
import {ComponentProps} from '../../shared/models/ComponentProps';
import {Button} from 'react-bootstrap';
import FieldErrorMessage from '../FieldErrorMessage';
import './DropZone.scss';
import FileDetails from './FileDetails';
import {useCallback, useMemo} from 'react';

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
                <Button variant="primary" onClick={open}>
                    Upload avatar
                </Button>
                <p>Only images files are allowed (.jpg, .png, .jpeg)</p>
            </div>
            <FieldErrorMessage name={field.name} />
        </section>
    );
};

export default DropZone;
