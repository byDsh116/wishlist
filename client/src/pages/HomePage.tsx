import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate('/reg')}>registration</button>
        <br />
        <br />
        <button onClick={() => navigate('/login')}>login</button>
      </div>
    </div>
  );
}
