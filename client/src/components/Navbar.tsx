import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import UserPage from '../pages/UserPage';
// import EntryButton from './EntryButton';
// import { Check } from '@mui/icons-material';
import Cookies from 'js-cookie';

const color = grey[900];

interface INavbarProps {
  cookie: string;
}

export default function Navbar(props: INavbarProps): JSX.Element {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
  const { cookie } = props;
  console.log(cookie);
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
          {cookie && (
            <button onClick={() => Cookies.remove('Dsh', { path: '/' })}>
              Log out
            </button>
          )}
          {/* <button onClick={() => check()}>ckeck</button> */}
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
          {/* {user ? <button>exit</button> : <button>not</button>} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
