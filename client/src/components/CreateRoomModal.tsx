import React, { useState } from 'react';
import axios from 'axios';
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const result = await axios.post(
        'http://localhost:3000/room/create',
        inputs
        // TODO: DO AT SERVER
      );

      if (result) {
        console.log('success create room', result.data);
        setInputs({ roomName: '', roomDescription: '' });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.error(error.message);
        alert(`Error: ${error.message}`);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Create room
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
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
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
