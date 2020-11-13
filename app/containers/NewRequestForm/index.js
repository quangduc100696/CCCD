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
  TableHead,
  TextField,
  Tooltip,
  Typography,
  TableRow,
  withStyles,
  TableCell,
  makeStyles,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ImageUpload from './ImageUpload';
import './styles.css';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableTool: {
    marginBottom: 5,
  },
  tableImg: {
    width: '40%',
  },
  img: {
    width: '75%',
  },
});

function NewRequestForm(props) {
  const { closeClick } = props;

  const [classify, setClassify] = useState([0]);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  const [imgs, setImgs] = useState();

  const classes = useStyles();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  const handleClassifyChange = e => {
    setClassify(e.target.value);
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

  const handleClose = () => {
    if (closeClick) {
      closeClick(false);
    }
  };

  return (
    <Grid>
      <Paper elevation={0} style={{ padding: '1%' }}>
        <Typography align="center" variant="h6">
          PHIẾU YÊU CẦU
        </Typography>
        <Grid item xl={12} xs={12} style={{ margin: '1%' }}>
          <Grid container spacing={3}>
            <Grid item xl={6} xs={6}>
              <Typography> Mã yêu cầu </Typography>
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
              <Typography>Đơn vị yêu cầu</Typography>
              <TextField
                fullWidth
                margin="dense"
                className="newRequestFormUnit"
                variant="outlined"
                label="Cục xuất nhập cảnh (A08)"
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
              <Typography>Cán bộ lập phiếu</Typography>
              <TextField
                fullWidth
                margin="dense"
                className="requestSender"
                variant="outlined"
                label="Nguyễn Quang Hải"
                disabled
              />
            </Grid>
            <Grid item xl={12} xs={12}>
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
              </TextField>
            </Grid>
            <Grid item xl={12} xs={12}>
              <Typography>Mô tả yêu cầu</Typography>
              <TextField
                fullWidth
                margin="dense"
                className="description"
                rows={5}
                multiline
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid container item xl={12} xs={12}>
              {classify === 1 && (
                <Grid container item spacing={3} xl={12} xs={12}>
                  <Grid item xl={4} xs={4}>
                    <Grid container alignItems="center" justify="space-between">
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
                    <Grid item xl={12} xs={12}>
                      <ImageUpload />
                    </Grid>
                  </Grid>

                  <Grid item xl={4} xs={4}>
                    <Grid container alignItems="center" justify="space-between">
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
                    <Grid item xl={12} xs={12}>
                      <input
                        id="image"
                        type="file"
                        className="imageUpload"
                        multiple="true"
                        onChange={handleOnchange}
                      />
                      <img alt="" className="img" src={imgs} />

                      {imgs &&
                        [...imgs].map(file => (
                          <img
                            alt=""
                            className="img"
                            src={URL.createObjectURL(file)}
                          />
                        ))}
                    </Grid>
                  </Grid>
                  <Grid item xl={12} xs={12}>
                    <Typography variant="subtitle1">
                      <b>Chú ý:</b> <br />
                      1.Ảnh có định dạng jpg hoặc jpeg <br />
                      2.Ảnh không bị bóng, lóa <br />
                      3.Ảnh không vượt quá 5MB và độ phân giải tối thiểu 640x480
                    </Typography>
                  </Grid>
                </Grid>
              )}

              {classify === 2 && (
                <Grid container item xl={12} xs={12}>
                  <Grid
                    container
                    justify="space-between"
                    className={classes.tableTool}
                  >
                    <Typography>
                      <b>DANH SÁCH MẪU VÂN TAY</b> (tối đa 10 mẫu/phiếu)
                    </Typography>
                    <Grid alignItems="center">
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
                  </Grid>
                  <Grid item xl={12} xs={12}>
                    <Table className={classes.table}>
                      <TableHead>
                        <StyledTableRow>
                          <StyledTableCell>STT</StyledTableCell>
                          <StyledTableCell className={classes.tableImg}>
                            Mẫu vân tay
                          </StyledTableCell>
                          <StyledTableCell>Mã số vân tay</StyledTableCell>
                          <StyledTableCell>Thao tác</StyledTableCell>
                        </StyledTableRow>
                      </TableHead>
                      <TableBody>
                        <StyledTableRow>
                          <StyledTableCell>{id}</StyledTableCell>
                          <StyledTableCell>
                            <input
                              id="image"
                              className="imageUpload"
                              type="file"
                              onChange={onSelectFile}
                            />
                            {selectedFile && (
                              <img
                                alt=""
                                className={classes.img}
                                src={preview}
                              />
                            )}
                          </StyledTableCell>
                          <StyledTableCell>{id}</StyledTableCell>
                          <StyledTableCell>
                            {show && (
                              <Grid>
                                <Tooltip title="See">
                                  <IconButton color="primary" aria-label="see">
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
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                  <Grid item xl={12} xs={12}>
                    <Typography variant="subtitle1">
                      <b>Chú ý:</b> <br />
                      1.Ảnh có định dạng jpg hoặc jpeg <br />
                      2.Ảnh không bị bóng, lóa <br />
                      3.Ảnh không vượt quá 5MB và độ phân giải tối thiểu 640x480
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Tooltip title="Cancel">
              <Button
                style={{ height: 35, width: 175 }}
                color="primary"
                variant="outlined"
                onClick={handleClose}
              >
                Hủy
              </Button>
            </Tooltip>
          </Grid>

          <Grid item>
            <Tooltip title="Update">
              <Button
                style={{ height: 35, width: 175 }}
                color="primary"
                onClick={handleClose}
                variant="contained"
              >
                Cập nhật
              </Button>
            </Tooltip>
          </Grid>

          <Grid item>
            <Tooltip title="Update and send">
              <Button
                style={{ height: 35, width: 175 }}
                color="primary"
                onClick={handleClose}
                variant="outlined"
              >
                Cập nhật & gửi
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default NewRequestForm;
