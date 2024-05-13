import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

type InputsType = {
  email: string;
  username: string;
  password: string;
};

export default function RegistrationPage(): JSX.Element {
  const [inputs, setInputs] = useState<InputsType>({
    email: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleAdd = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const result = await axios.post<InputsType, AxiosResponse<InputsType>>(
        'http://localhost:3000/user/create',
        inputs,
        {
          withCredentials: true,
        }
      );

      if (result) {
        console.log('succes registration');
        setInputs({ email: '', username: '', password: '' });
        navigate('/userPage');
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.error(error.message);
        alert(`Error: ${error.message}`);
      } else {
        console.error(error);
      }
    }
  };
  return (
    <form onSubmit={handleAdd} className='form' id='registration'>
      <input
        type='text'
        placeholder='email'
        name='email'
        value={inputs.email}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='username'
        name='username'
        value={inputs.username}
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='passsword'
        name='password'
        value={inputs.password}
        onChange={handleChange}
      />
      <button type='submit'>submit</button>
    </form>
  );
}
