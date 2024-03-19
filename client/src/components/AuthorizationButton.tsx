import React, { useEffect, useState } from 'react';

// interface IAuthorizeButtonProps {
//   buttonText: string;
//   onClickHandler: () => void;
// }

export default function AuthorizationButton() {
  // const [currentUrl, setCurrentUrl] = useState<string>('/')
  const [buttonText, setButtonText] = useState<string>('');

  const currentUrl: string = window.location.pathname;
  useEffect(() => {
    if (currentUrl === '/') {
      setButtonText('set');
    } else if (currentUrl === '/registration') {
      setButtonText('registration');
    }
  }, [currentUrl, setButtonText]);

  return <button>{buttonText}</button>;
}
