import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import LogoLink from './LogoLink';
import AuthorizationButton from './AuthorizationButton';
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
          ></IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            background-color={{ color }}
            className={'typography'}
          >
            <LogoLink />
          </Typography>
          <AuthorizationButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
