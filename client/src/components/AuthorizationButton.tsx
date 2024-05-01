import { useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthActionTypes } from '../types/types';
import { authReducer } from '../redux/authReducer';
import Cookies from 'js-cookie';
import LogoutIcon from '@mui/icons-material/Logout';

export default function AuthorizationButton() {
  const cookie = Cookies.get('Dsh');
  const location = useLocation();
  const [state, dispatch] = useReducer(authReducer, { isLoggedIn: false });

  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === '/') {
      navigate('registration');
      if (state.isLoggedIn) {
        // Cookies.remove('Dsh', { path: '/' });
        dispatch({ type: AuthActionTypes.LOGIN });
      }
    } else {
      navigate('/');
    }
  };

  useEffect(() => {}, []);
  const logoutHandleClick = () => {
    if (!state.isLoggedIn) {
      Cookies.remove('Dsh', { path: '/' });
      dispatch({ type: AuthActionTypes.LOGOUT });
      navigate('/');
    }
  };

  return (
    <>
      <button onClick={handleClick} className={cookie ? 'hidden' : ''}>
        {location.pathname === '/' ? 'Registration' : 'Login'}
      </button>
      <button onClick={logoutHandleClick} className={cookie ? '' : 'hidden'}>
        <LogoutIcon />{' '}
      </button>
    </>
  );
}
