import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function LogoLink() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button onClick={handleClick} id='logo-button'>
      {/* <Link to='/' className='link'> */}
      WISHLIST
      {/* </Link> */}
    </button>
  );
}
