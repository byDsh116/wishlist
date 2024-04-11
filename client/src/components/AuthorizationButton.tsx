import { useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthActionTypes } from '../types/types';
import { authReducer } from '../redux/authReducer';

interface IAuthorizationButtonProps {
  cookie: string;
}

export default function AuthorizationButton(props: IAuthorizationButtonProps) {
  const { cookie } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = useReducer(authReducer, { isLoggedIn: !!cookie });

  useEffect(() => {
    if (cookie) {
      dispatch({ type: AuthActionTypes.LOGIN });
    }
  }, [cookie]);

  const handleClick = () => {
    if (state.isLoggedIn) {
      Cookies.remove('Dsh', { path: '/' });
      dispatch({ type: AuthActionTypes.LOGOUT });
    } else {
      if (location.pathname === '/') {
        navigate('/registration');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <button onClick={handleClick}>
      {location.pathname === '/'
        ? 'Registration'
        : state.isLoggedIn
        ? 'Logout'
        : 'Login'}
    </button>
  );
}
