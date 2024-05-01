import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';
import RegistrationPage from './components/RegistrationPage';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/:username' element={<UserPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
