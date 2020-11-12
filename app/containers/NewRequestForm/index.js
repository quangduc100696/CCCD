import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Tooltip,
  Typography,
  TableRow,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageUpload from './ImageUpload';
import './styles.css';

function NewRequestForm() {
  const [classify, setClassify] = useState([0]);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  const [imgs, setImgs] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleClassifyChange = e => {
    setClassify(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setShow(true);
    setId(1);
    setSelectedFile(e.target.files[0]);
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  const handleOnchange = event => {
    setImgs(event.target.files);
  };

  return (
    <Grid>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Thêm mới
      </Button>
      <Dialog fullScreen open={open}>
        <Paper elevation={0} style={{ padding: '1%' }}>
          <Grid>
            <Typography align="center" variant="h6">
              PHIẾU YÊU CẦU
            </Typography>
          </Grid>

          <Paper elevation={0}>
            <Grid item xl={12} xs={12} style={{ margin: '1%' }}>
              <Grid container spacing={3}>
                <Grid item xl={6} xs={6}>
                  <Typography> Mã phiếu yêu cầu </Typography>
                  <TextField
                    fullWidth
                    margin="dense"
                    className="newRequestFormCode"
                    variant="outlined"
                    label="20201015-A08-034"
                    disabled
                  />
                </Grid>
                <Grid item xl={6} xs={6}>
                  <Typography>Đơn vị gửi yêu cầu</Typography>
                  <TextField
                    fullWidth
                    margin="dense"
                    className="newRequestFormUnit"
                    variant="outlined"
                    label="Cục Quản lý xuất nhập cảnh (A08)"
                    disabled
                  />
                </Grid>
                <Grid item xl={6} xs={6}>
                  <Typography>Ngày gửi yêu cầu</Typography>
                  <TextField
                    fullWidth
                    margin="dense"
                    className="requestDate"
                    variant="outlined"
                    label="20/10/2020 09:00"
                    disabled
                  />
                </Grid>
                <Grid item xl={6} xs={6}>
                  <Typography>Người gửi yêu cầu</Typography>
                  <TextField
                    fullWidth
                    margin="dense"
                    className="requestSender"
                    variant="outlined"
                    label="Nguyễn Quang Hải"
                    disabled
                  />
                </Grid>
                <Grid item xl={6} xs={6}>
                  <Typography>Phân loại yêu cầu</Typography>
                  <TextField
                    fullWidth
                    margin="dense"
                    className="classify"
                    onChange={handleClassifyChange}
                    value={classify}
                    variant="outlined"
                    select
                  >
                    <MenuItem value={0}>Chọn</MenuItem>
                    <MenuItem value={1}>Đối sánh vân tay 1:1</MenuItem>
                    <MenuItem value={2}>Đối sánh vân tay 1:N</MenuItem>
                    <MenuItem value={3}>Đối sánh vân tay 1:N (lô)</MenuItem>
                  </TextField>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid container item xl={6} xs={6}>
                  {classify === 1 && (
                    <Grid container item spacing={3} xl={12} xs={12}>
                      <Grid item xl={6} xs={6}>
                        <Grid
                          container
                          alignItems="center"
                          justify="space-between"
                        >
                          <Grid>Mẫu vân tay 1</Grid>
                          <Grid>
                            <Tooltip title="See">
                              <IconButton color="primary" aria-label="see">
                                <VisibilityIcon />
                              </IconButton>
                            </Tooltip>
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
                            <Tooltip title="Delete">
                              <IconButton color="primary" aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                        </Grid>
                        <Grid item xl={6} xs={6}>
                          <ImageUpload />
                        </Grid>
                      </Grid>

                      <Grid item xl={6} xs={6}>
                        <Grid
                          container
                          alignItems="center"
                          justify="space-between"
                        >
                          <Typography align="center">Mẫu vân tay 2</Typography>
                          <Grid>
                            <Tooltip title="See">
                              <IconButton color="primary" aria-label="see">
                                <VisibilityIcon />
                              </IconButton>
                            </Tooltip>
                            <label htmlFor="image">
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
                            <Tooltip title="Delete">
                              <IconButton
                                color="primary"
                                aria-label="delete"
                                onClick={handleDelete}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                        </Grid>
                        <input
                          id="image"
                          type="file"
                          className="imageUpload"
                          multiple="true"
                          onChange={handleOnchange}
                        />
                        <img alt="" className="img11" src={imgs} />

                        {imgs &&
                          [...imgs].map(file => (
                            <img
                              alt=""
                              className="img11"
                              src={URL.createObjectURL(file)}
                            />
                          ))}
                      </Grid>
                    </Grid>
                  )}

                  {classify === 2 && (
                    <Grid container item spacing={3} xl={12} xs={12}>
                      <Grid item xl={6} xs={6}>
                        <Grid
                          container
                          alignItems="center"
                          justify="space-between"
                        >
                          <Grid>Mẫu vân tay</Grid>
                          <Grid>
                            <Tooltip title="See">
                              <IconButton color="primary" aria-label="see">
                                <VisibilityIcon />
                              </IconButton>
                            </Tooltip>
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
                            <Tooltip title="Delete">
                              <IconButton color="primary" aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                        </Grid>
                        <Grid item xl={6} xs={6}>
                          <ImageUpload />
                        </Grid>
                      </Grid>
                    </Grid>
                  )}

                  {classify === 3 && (
                    <Grid container item spacing={3} xl={12} xs={12}>
                      <Grid item xl={12} xs={12}>
                        <Grid
                          container
                          alignItems="center"
                          justify="space-between"
                        >
                          <Grid>
                            <b>DANH SÁCH MẪU VÂN TAY</b> (tối đa 10 mẫu/phiếu)
                          </Grid>
                          <Grid>
                            <Tooltip title="Add">
                              <label htmlFor="image">
                                <Button
                                  color="primary"
                                  variant="contained"
                                  aria-label="uploadFile"
                                  component="span"
                                >
                                  Thêm mẫu
                                </Button>
                              </label>
                            </Tooltip>
                          </Grid>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell>Mẫu vân tay</TableCell>
                                <TableCell>Mã số vân tay</TableCell>
                                <TableCell>Kết quả</TableCell>
                                <TableCell>Thao tác</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                <TableCell>{id}</TableCell>
                                <TableCell className="tableImg">
                                  <input
                                    id="image"
                                    className="imageUpload"
                                    type="file"
                                    onChange={onSelectFile}
                                  />
                                  {selectedFile && (
                                    <img
                                      alt=""
                                      className="imgTable"
                                      src={preview}
                                    />
                                  )}
                                </TableCell>
                                <TableCell>{id}</TableCell>
                                <TableCell>{id}</TableCell>
                                <TableCell>
                                  {show && (
                                    <Grid>
                                      <Tooltip title="See">
                                        <IconButton
                                          color="primary"
                                          aria-label="see"
                                        >
                                          <VisibilityIcon />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip title="Upload file">
                                        <IconButton
                                          color="primary"
                                          aria-label="uploadFile"
                                          component="span"
                                        >
                                          <CloudUploadIcon />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip title="Delete">
                                        <IconButton
                                          color="primary"
                                          aria-label="delete"
                                          onClick={handleDelete}
                                        >
                                          <DeleteIcon />
                                        </IconButton>
                                      </Tooltip>
                                    </Grid>
                                  )}
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Grid>

                <Grid item xl={6} xs={6}>
                  <Typography>Mô tả yêu cầu</Typography>
                  <TextField
                    fullWidth
                    margin="dense"
                    className="description"
                    rows={10}
                    multiline
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Grid container justify="center" spacing={3}>
            <Grid item>
              <Tooltip title="Cancel">
                <Button
                  style={{ height: 35, width: 250 }}
                  color="primary"
                  variant="outlined"
                  onClick={handleClose}
                >
                  Hủy
                </Button>
              </Tooltip>
            </Grid>

            <Grid item>
              <Tooltip title="Save">
                <Button
                  style={{ height: 35, width: 250 }}
                  color="primary"
                  onClick={handleClose}
                  variant="outlined"
                >
                  Lưu
                </Button>
              </Tooltip>
            </Grid>

            <Grid item>
              <Tooltip title="Save and send">
                <Button
                  style={{ height: 35, width: 250 }}
                  color="primary"
                  onClick={handleClose}
                  variant="contained"
                >
                  Lưu & gửi
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </Dialog>
    </Grid>
  );
}

export default NewRequestForm;
