import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      HomePage <br />
      <br />
      <button onClick={() => navigate('/reg')}>registration</button>
      <br />
      <br />
      <button>login</button>
    </div>
  );
}
