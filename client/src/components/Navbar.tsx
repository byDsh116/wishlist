import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import LogoLink from './LogoLink';
import AuthorizationButton from './AuthorizationButton';

const color = grey[900];

interface INavbarProps {
  cookie: string;
}

export default function Navbar(props: INavbarProps): JSX.Element {
  // состояние страницы - находимся ли мы на страницы входа
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
  // проверка залогинен ли пользователь
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { cookie } = props;

  //  функция, которая вызывается каждый раз, когда что-то меняется
  useEffect(() => {
    // если куки есть - значит меня состояние пользователя на залогиненное
    // если куки пришли через пропс
    if (cookie) {
      // кука проставилась а вот клг только после перезагрузки, а должен сразу?
      setIsLoggedIn(true);
      console.log(cookie);
    } else {
      setIsLoggedIn(false);
    }
    // отслеживаю изсенение состояний
  }, [cookie, isLoggedIn, isLoginPage]);

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
          {/* если залогинен то отображается кнопка логаут */}
          {/* что если изменить логику и менять визибл кнопки через из логед? показывай: не показывай */}
          {/* TODO: кнопка с логикой в отдельный компонент */}
          <AuthorizationButton cookie={cookie || ''} />
          {isLoggedIn && (
            <button
              onClick={() => {
                Cookies.remove('Dsh', { path: '/' });
                setIsLoggedIn(false);
              }}
            >
              Log out
            </button>
          )}
          <button
            id='signUp-button'
            onClick={() => setIsLoginPage(!isLoginPage)}
          >
            {!isLoginPage ? (
              <Link to='/' className='link'></Link>
            ) : (
              <Link to='/registration' className='link'>
                -{/* <RegistrationButton /> */}
              </Link>
            )}
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
