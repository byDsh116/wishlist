// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const color = grey[900];

export default function Navbar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }} className={'navbar-box'}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            background-color={{ color }}
            className={'typography'}
          >
            <button id='logo-button'>
              <a className='link' href='/'>
                WISHLIST
              </a>
            </button>
          </Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='outlined' className='signUp_button'>
              Sign up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
