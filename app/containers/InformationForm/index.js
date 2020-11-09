/**
 *
 * Customer
 *
 */
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Grid,
  TextField,
  Checkbox,
  InputAdornment,
  Button,
  MenuItem,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import './style.css';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  DateTimePicker,
} from '@material-ui/pickers';
import 'date-fns';
import MomentUtils from '@date-io/moment';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import { makeSelectInfomation, makeSelectValue } from './selectors';
import saga from './saga';
import reducer from './reducer';
import { getInfomation } from './actions';

const InfomationSearch = props => {
  useInjectReducer({ key: 'infomationSearch', reducer });
  useInjectSaga({ key: 'infomationSearch', saga });

  const { getInformation, requestForm } = props;
  const [code, setCode] = useState();
  const [show, setShow] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [valueSelect, setValueSelect] = useState(0);
  const [match, setMatch] = useState(0);
  const [unit, setUnit] = useState(0);
  const [name, setName] = useState();
  const [active, setActive] = useState(false);

  useEffect(() => {
    getInformation();
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  const handleChecked = () => {
    setActive(!active);
  };

  const handleRefresh = () => {
    setCode('');
    setValueSelect(0);
    setFromDate(new Date());
    setToDate(new Date());
    setMatch(0);
    setUnit(0);
    setName('');
    setActive(false);
  };

  return (
    <>
      <Paper className="paper">
        <Typography variant="h6">THÔNG TIN TÌM KIẾM</Typography>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              label="Mã phiếu yêu cầu"
              value={code}
              variant="outlined"
              size="small"
              fullWidth
              onChange={e => setCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  checked={active}
                  onClick={handleChecked}
                />
              }
              label="Tìm chính xác"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={valueSelect}
              select
              fullWidth
              variant="outlined"
              size="small"
              onChange={e => {
                setValueSelect(e.target.value);
              }}
            >
              <MenuItem value={0}>Trạng thái</MenuItem>
              <MenuItem value={1}>Chờ kết quả</MenuItem>
              <MenuItem value={2}>Có kết quả</MenuItem>
              <MenuItem value={3}>Đã gửi</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        {show ? (
          <>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <DateTimePicker
                    fullWidth
                    size="small"
                    inputVariant="outlined"
                    format="DD/MM/YYYY hh:mm"
                    variant="outlined"
                    margin="normal"
                    required
                    label="Từ ngày"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <DateRangeRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                    error={!fromDate}
                    name="fromDate"
                    onChange={e => setFromDate(e)}
                    value={fromDate}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <DateTimePicker
                    fullWidth
                    size="small"
                    inputVariant="outlined"
                    format="DD/MM/YYYY hh:mm"
                    required
                    margin="normal"
                    variant="outlined"
                    label="Đến ngày"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <DateRangeRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                    error={!toDate}
                    name="toDate"
                    onChange={e => {
                      setToDate(e);
                    }}
                    value={toDate}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={match}
                  select
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  size="small"
                  onChange={e => setMatch(e.target.value)}
                >
                  <MenuItem value={0}>
                    Phân loại nhận dạng(vân tay, khuôn mặt, 1:1, 1:N)
                  </MenuItem>
                  <MenuItem value={1}>Đối sánh vân tay </MenuItem>
                  <MenuItem value={2}>Đối sánh khuôn mặt</MenuItem>
                  <MenuItem value={3}>Đối sánh vân tay 1:1</MenuItem>
                  <MenuItem value={4}>Đối sáng vân tay 1:N (lô)</MenuItem>
                  <MenuItem value={5}>Đối sáng vân tay 1:N</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  value={unit}
                  select
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  size="small"
                  onChange={e => setUnit(e.target.value)}
                >
                  <MenuItem value={0}>Đơn vị gửi yêu cầu</MenuItem>
                  <MenuItem value={1}>A08</MenuItem>
                  <MenuItem value={2}>C09</MenuItem>
                  <MenuItem value={3}>V06</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Họ và tên người gửi yêu cầu"
                  value={name}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  size="small"
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  style={{ marginTop: 15 }}
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
                      onClick={handleChecked}
                      checked={active}
                    />
                  }
                  label="Tìm chính xác"
                />
              </Grid>
            </Grid>{' '}
          </>
        ) : (
          ''
        )}

        <Grid container justify="center" spacing={4}>
          <Grid item xs={2}>
            <Button
              margin="normal"
              size="small"
              variant="contained"
              color="secondary"
              startIcon={<RefreshIcon />}
              fullWidth
              onClick={handleRefresh}
            >
              Làm mới
            </Button>
          </Grid>
          <Grid item xs={2}>
            {show ? (
              <Button
                margin="normal"
                size="small"
                variant="contained"
                color="secondary"
                startIcon={<SearchIcon />}
                fullWidth
                onClick={handleShow}
              >
                Tắt tìm kiếm nâng cao
              </Button>
            ) : (
              <Button
                size="small"
                margin="normal"
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                fullWidth
                onClick={handleShow}
              >
                Tìm kiếm nâng cao
              </Button>
            )}
          </Grid>
          <Grid item xs={2}>
            <Button
              size="small"
              margin="normal"
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              fullWidth
            >
              Tìm kiếm
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper className="grid">
        <Grid container justify="flex-end" spacing={3}>
          <Grid item>
            <Button variant="outlined" size="small">
              Xem
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              Sửa
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              Xóa
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              In phiếu yêu cầu
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small">
              In kết quả
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="small">
              Thêm mới
            </Button>
          </Grid>
        </Grid>
        <Table>
          <TableBody>
            {requestForm.map(items => (
              <TableRow key={items.id}>
                <TableCell>{items.name}</TableCell>
                <TableCell>{items.chovay}</TableCell>
                <TableCell>{items.the}</TableCell>
                <TableCell>{items.huydong}</TableCell>
                <TableCell>{items.thanhtoan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

InfomationSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  requestForm: makeSelectInfomation(),
});

function mapDispatchToProps(dispatch) {
  return {
    getInformation: () => {
      dispatch(getInfomation());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(InfomationSearch);
