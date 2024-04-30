import { useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthActionTypes } from '../types/types';
import { authReducer } from '../redux/authReducer';

export default function AuthorizationButton() {
  const location = useLocation();
  // const [state, dispatch] = useReducer(authReducer, { isLoggedIn: false });
  // const handleClick = () => {
  //   dispatch({ type: AuthActionTypes.LOGOUT });
  // };
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === '/') {
      navigate('registration');
    } else {
      navigate('/');
    }
  };

  return (
    <button onClick={handleClick}>
      {location.pathname === '/' ? 'Registration' : 'Login'}
    </button>
    // <button onClick={handleClick}>
    //   {location.pathname === '/'
    //     ? 'Registration'
    //     : state.isLoggedIn
    //     ? 'Logout'
    //     : 'Login'}
    // </button>
  );
}
