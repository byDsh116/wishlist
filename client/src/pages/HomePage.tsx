import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        HomePage <br />
        <br />
        <button onClick={() => navigate('/reg')}>registration</button>
        <br />
        <br />
        <button>login</button>
      </div>
    </div>
  );
}
