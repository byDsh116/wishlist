import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './pages/HomePage';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
