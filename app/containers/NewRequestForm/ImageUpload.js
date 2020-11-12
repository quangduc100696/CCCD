import React, { useEffect, useState } from 'react';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // Upload Image
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  // Select Image
  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <input
        id="input-upload-image"
        className="imageUpload"
        type="file"
        onChange={onSelectFile}
      />
      {selectedFile && <img alt="" className="img" src={preview} />}
    </div>
  );
}

export default ImageUpload;
