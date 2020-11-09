import React from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class UploadImage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      imgs: [],
    };
  }
  getInitialState () {
    return {file: []};
  }

  _onChange = event => {
    this.setState ({
      imgs: event.target.files,
    });
  };

  render () {
    return (
      <div>
        <input
          id="input-upload-image"
          type="file"
          name="user[image]"
          multiple="true"
          onChange={this._onChange}
        />
        <label htmlFor="input-upload-image">
          <Tooltip title="Upload file">
            <IconButton
              color="primary"
              aria-label="uploadFile"
              component="span"
            >
              <CloudUploadIcon />
            </IconButton>
          </Tooltip>
        </label>

        <img src={this.state.imgSrc} />

        {this.state.imgs &&
          [...this.state.imgs].map (file => (
            <img src={URL.createObjectURL (file)} />
          ))}
      </div>
    );
  }
}

export default UploadImage;
