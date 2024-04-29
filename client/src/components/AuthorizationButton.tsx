import { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthActionTypes } from '../types/types';
import { authReducer } from '../redux/authReducer';

export default function AuthorizationButton() {
  const location = useLocation();
  const [state, dispatch] = useReducer(authReducer, { isLoggedIn: false });
  const handleClick = () => {
    dispatch({ type: AuthActionTypes.LOGOUT });
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
