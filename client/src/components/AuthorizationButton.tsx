import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import LogoutIcon from '@mui/icons-material/Logout';
import { RootState } from '../redux/reducers/store';
import { logout } from '../redux/actions/authActions';

export default function AuthorizationButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleClick = () => {
    if (location.pathname === '/') {
      navigate('registration');
    } else {
      navigate('/');
    }
  };
  const logoutHandleClick = async () => {
    try {
      await fetch('/user/logout', { method: 'GET', credentials: 'include' });
      Cookies.remove('Dsh', { path: '/' }); 
      dispatch(logout());
      navigate('/');
      console.log('logoutHandleClick');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };


  return (
    <>
      <button onClick={handleClick} className={!isLoggedIn ? '' : 'hidden'}>
        {location.pathname === '/' ? 'Registration' : 'Login'}
      </button>
      <button onClick={logoutHandleClick} className={isLoggedIn ? '' : 'hidden'}>
        <LogoutIcon />
      </button>
    </>
  );
}
