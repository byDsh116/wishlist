import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './pages/HomePage';

function App(): JSX.Element {
  return (
    <>
      <div> just test 0.1</div>
      <Routes>
        <Route path='/reg' element={<RegistrationForm />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
