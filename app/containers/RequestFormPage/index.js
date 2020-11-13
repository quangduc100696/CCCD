import React, { useState } from 'react';
import { Dialog, Grid, IconButton, Paper, Tooltip } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Delete } from '@material-ui/icons';
import NewRequestForm from '../NewRequestForm';
import DeleteForm from '../DeleteForm';

RequestFormPage.propTypes = {};

function RequestFormPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openDel, setOpenDel] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleOpenDel = () => {
    setOpenDel(true);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };

  return (
    <Grid>
      <Paper>
        <Grid>
          <Tooltip title="Add">
            <IconButton
              variant="outlined"
              color="primary"
              onClick={handleOpenAdd}
            >
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              variant="outlined"
              color="primary"
              onClick={handleOpenDel}
            >
              <Delete fontSize="large" />
            </IconButton>
          </Tooltip>
        </Grid>
        <Dialog fullScreen open={openAdd}>
          <NewRequestForm open={openAdd} requestFormClose={handleCloseAdd} />
        </Dialog>
        <Dialog open={openDel}>
          <DeleteForm open={openDel} delClose={handleCloseDel} />
        </Dialog>
      </Paper>
    </Grid>
  );
}

export default RequestFormPage;
