import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const color = grey[900];

export default function Navbar(): JSX.Element {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true);

  // const setIsLoginPageHandler = () => {
  //   isLoginPage ? setIsLoginPage(false) : setIsLoginPage(true);
  // };

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
            <button id='logo-button' onClick={() => setIsLoginPage(true)}>
              <Link to='/' className='link'>
                WISHLIST
              </Link>
            </button>
          </Typography>

          <button
            id='signUp-button'
            onClick={() => setIsLoginPage(!isLoginPage)}
          >
            {!isLoginPage ? (
              <Link to='/' className='link'>
                LOGIN
              </Link>
            ) : (
              <Link to='/registration' className='link'>
                Registration
              </Link>
            )}
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
