import { useEffect, useState } from 'react';
// import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const history = createBrowserHistory();

interface IAuthorizationButtonProps {
  cookie: string;
}
export default function AuthorizationButton(props: IAuthorizationButtonProps) {
  const [buttonText, setButtonText] = useState<string>('');
  // const [currentUrl, setCurrentUrl] = useState<string>(
  //   window.location.pathname
  // );
  const { cookie } = props;
  const currentUrl: string = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUrl === '/') {
      setButtonText('Registration');
    } else if (currentUrl === '/registration') {
      setButtonText('Login');
    } else if (cookie) {
      setButtonText('Logout');
    }
  }, [currentUrl, setButtonText, cookie]);

  const handleClick = () => {
    if (buttonText === 'Registration') {
      navigate('/registration');
    } else if (buttonText === 'Login') {
      navigate('/');
    } else if (buttonText === 'Logout') {
      navigate('/logout');
    }
  };

  return <button onClick={handleClick}>{buttonText}</button>;
}
