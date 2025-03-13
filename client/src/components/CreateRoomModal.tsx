import React, { useState } from 'react';
// import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type RoomInputsType = {
  roomName: string;
  roomDescription: string;
};

export default function CreateRoomModal(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const [inputs, setInputs] = useState<RoomInputsType>({
    roomName: '',
    roomDescription: '',
  });

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Create room
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create room</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin='dense'
            id='roomName'
            name='roomName'
            label='Room name'
            type='text'
            fullWidth
            variant='standard'
            onChange={handleChange}
          />

          <TextField
            autoFocus
            margin='dense'
            id='roomDescription'
            name='roomDescription'
            label='Room description'
            type='text'
            fullWidth
            variant='standard'
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button type='submit' onClick={handleSubmit}> */}
          Create
          {/* </Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
