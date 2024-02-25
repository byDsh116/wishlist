import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/:username' element={<UserPage />} />
        <Route path='/registration' element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
