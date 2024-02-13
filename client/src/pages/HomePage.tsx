import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Form from '../components/RegistrationForm';

// interface IEntry {
//   entryAction: boolean;
// }

export default function HomePage() {
  const [entryAction, setEntryAction] = useState(false);
  const navigate = useNavigate();

  // const handleChange = (): void => {
  //   setEntryAction({ entryAction: true });
  // };

  return (
    <div className='homePage-div_wrap'>
      {/* <Form /> */}
      <div className='homePage-div_button-container'>
        {/* <button onClick={() => navigate('/reg')}>registration</button>
        <button onClick={() => navigate('/login')}>login</button> */}

        <button onClick={() => navigate('/reg')}>registration</button>
        <button onClick={() => setEntryAction(!entryAction)}>Login</button>
        <div>{entryAction ? <h1>true</h1> : <h1>false</h1>}</div>
      </div>
    </div>
  );
}
