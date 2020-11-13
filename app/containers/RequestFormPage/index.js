import React, { useState } from 'react';
import { Dialog, Grid, IconButton, Tooltip } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NewRequestForm from '../NewRequestForm';

RequestFormPage.propTypes = {};

function RequestFormPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid>
        <Tooltip title="Add">
          <IconButton variant="outlined" color="primary" onClick={handleOpen}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Dialog fullScreen open={open}>
          <NewRequestForm open={open} closeClick={handleClose} />
        </Dialog>
      </Grid>
    </div>
  );
}

export default RequestFormPage;
