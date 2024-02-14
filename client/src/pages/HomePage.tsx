import { useNavigate } from 'react-router-dom';
// import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='homePage-div_wrap'>
      {/* <RegistrationForm /> */}
      <LoginForm />
      <div className='homePage-div_button-container'>
        <button onClick={() => navigate('/reg')}>registration</button>
        <button onClick={() => navigate('/account:id')}>login</button>
      </div>
    </div>
  );
}
