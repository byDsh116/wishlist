import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface IAuthorizationButtonProps {
  cookie: string;
}
export default function AuthorizationButton(props: IAuthorizationButtonProps) {
  const [buttonText, setButtonText] = useState<string>('');
  const { cookie } = props;
  const currentUrl: string = window.location.pathname;
  const navigate = useNavigate();

  // Этот useEffect будет вызываться каждый раз при изменении currentUrl или cookie
  useEffect(() => {
    if (currentUrl === '/') {
      setButtonText('Registration');
    } else if (currentUrl === '/registration') {
      setButtonText('Login');
    } else if (cookie) {
      setButtonText('Logout');
    }
  }, [currentUrl, cookie]);

  // Этот useEffect будет вызываться только один раз при первом рендере компонента
  useEffect(() => {
    // Проверяем наличие кук при каждом входе на страницу
    if (cookie) {
      setButtonText('Logout');
    }
  }, []); // В зависимости от того, как у вас генерируется cookie, этот эффект может быть вызван несколько раз, так что пустой массив зависимостей - это нормально

  const handleClick = () => {
    if (buttonText === 'Registration') {
      navigate('/registration');
    } else if (buttonText === 'Login') {
      navigate('/');
    } else if (buttonText === 'Logout') {
      Cookies.remove('Dsh', { path: '/' });
      setButtonText('Login');
      navigate('/');
    }
  };

  return <button onClick={handleClick}>{buttonText}</button>;
}
