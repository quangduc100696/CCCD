import { Button, Tooltip } from '@material-ui/core';
import React from 'react';
import './styles.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
    };
  }

  fileObj = [];

  fileArray = [];

  uploadMultipleFiles = e => {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files.length === 1) {
        this.fileArray.push(URL.createObjectURL(e.target.files[0]));
      } else {
        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
      }
      this.setState({ file: this.fileArray });
    }
  };

  uploadFiles = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <div className="form-group multi-preview">
          {(this.fileArray || []).map(url => (
            <img src={url} alt="..." />
          ))}
        </div>
        <div className="form-group">
          <input
            id="contained-button-file"
            type="file"
            className="form-control"
            onChange={this.uploadMultipleFiles}
            multiple
          />
          <label htmlFor="contained-button-file">
            <Tooltip title="Upload file">
              <Button size="medium" color="primary" component="span">
                <CloudUploadIcon />
              </Button>
            </Tooltip>
          </label>
        </div>
      </form>
    );
  }
}
