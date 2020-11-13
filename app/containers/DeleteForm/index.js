import React from 'react';
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: grey[50],
    },
  },
});

DeleteForm.propTypes = {};

const useStyles = makeStyles({
  header: {
    width: 600,
    height: 200,
  },
  body: {
    margin: 40,
  },
  text: {
    color: theme.palette.secondary.main,
  },
  del: {
    height: 40,
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    height: 35,
    width: 100,
    margin: 10,
  },
});

function DeleteForm(props) {
  const { open, delClose } = props;
  const classes = useStyles();

  const handleClose = () => {
    if (delClose) {
      delClose(false);
    }
    console.log({ open });
  };

  return (
    <Grid>
      <Paper className={classes.header}>
        <Grid container alignItems="center" className={classes.del}>
          <Delete className={classes.text} fontSize="large" />
          <Typography className={classes.text}>Xác nhận xóa</Typography>
        </Grid>
        <Grid className={classes.body}>
          <Typography>Bạn có chắc muốn xóa phiếu yêu cầu?</Typography>
          <Grid container justify="center">
            <Grid item>
              <Tooltip title="Cancel">
                <Button
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                  onClick={handleClose}
                >
                  Hủy
                </Button>
              </Tooltip>
            </Grid>

            <Grid item>
              <Tooltip title="Agree">
                <Button
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                  // onClick={handleClose}
                >
                  Đồng ý
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default DeleteForm;
