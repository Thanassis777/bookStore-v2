import './DropZone.scss';
import {FiDelete} from 'react-icons/fi';
import React from 'react';

type FileDetailsProps = {
    files: File[];
    removeFile: (e: any) => void;
};

const FileDetails = ({files, removeFile}: FileDetailsProps) =>
    files.length > 0 && (
        <aside className="thumbsContainer">
            {files.map((file) => (
                <div className="thumb" key={file.name}>
                    <div className="thumbInner">
                        <img alt={file.name} src={URL.createObjectURL(file)} className="img" />
                    </div>
                </div>
            ))}
            {files.map((file) => (
                <h6 key={file.name}>{file.name}</h6>
            ))}
            <FiDelete onClick={removeFile} className="deleteIcon" />
        </aside>
    );

export default React.memo(FileDetails);
