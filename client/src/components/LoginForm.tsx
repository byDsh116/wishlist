import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type InputsType = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [inputs, setInputs] = useState<InputsType>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleFind = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const result = await axios.post<InputsType, AxiosResponse>(
        'http://localhost:3000/user/login',
        inputs
      );
      if (result) {
        console.log('succes login');
        setInputs({ email: '', password: '' });
        navigate('/userPage');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response);
        alert(`Error: ${error.response?.statusText}`);
      } else {
        console.error(error);
      }
    }
  };
  // const result = await aiost post
  return (
    <form onSubmit={handleFind} className='form'>
      <input
        type='text'
        placeholder='email'
        name='email'
        value={inputs.email}
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
