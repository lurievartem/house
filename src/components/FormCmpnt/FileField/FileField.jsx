import React, { Component, PropTypes } from 'react';

import './FileField.scss';

class FileField extends Component{
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        multiple: PropTypes.bool,
        fileInput: PropTypes.bool,
        fileArea: PropTypes.bool,
        fileAreaClassName: PropTypes.string,
        validMimeTypes: PropTypes.array,
        onBlur: PropTypes.func,
    };

    static defaultProps = {
        multiple: true,
        fileInput: true,
        fileArea: true,
        fileAreaClassName: 'file-reader',
        validMimeTypes: ['image/png', 'image/jpeg', 'image/gif']
    };

    constructor(props){
        super(props);

        this.files = [];
        this.loadedFiles = [];
        this.onLoad = this.onLoad.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
    }

    onLoad(event){
        event.preventDefault();
        event.stopPropagation();
        this.uploadFiles(event.target.files || event.dataTransfer.files);
    }

    onDragOver(event){
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'copy';
    }

    onDownloaded(file){
        this.loadedFiles.push(file);
        if(this.files.length === this.loadedFiles.length){
            this.props.onChange(this.loadedFiles);
        }
    }

    uploadFiles(newFiles){
        this.files = this.files.concat(Array.from(newFiles));
        this.files.forEach(file => {
            if(file && this.props.validMimeTypes.includes(file.type)){
                this.loadFile(file);
            }
        });
    }

    loadFile(file){
        const reader = new FileReader();
        reader.onload = event => {
            this.onDownloaded({
                file: {
                    name: file.name,
                    dataUrl: event.target.result
                }
            });
        };
        reader.readAsDataURL(file);
    }

    render(){
        const multipleFile = this.props.multiple ? 'multiple' : '';

        return(
            <div>
                <input type="file" multiple={multipleFile} onChange={this.onLoad} />
                <div
                    className={this.props.fileAreaClassName}
                    onDrop={this.onLoad}
                    onDragOver={this.onDragOver}
                />
            </div>
        );
    }
}

export default FileField;
