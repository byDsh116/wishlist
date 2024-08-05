// LoginPage.tsx

import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

type InputsType = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [inputs, setInputs] = useState<InputsType>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        inputs,
        {
          withCredentials: true,
        }
      );
      if (result.data) {
        dispatch(login(inputs.email));
        setInputs({ email: '', password: '' });
        navigate(`/userPage/${result.data.username}`); // Используем email для навигации
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          alert('Пользователь не найден');
          navigate(`/registration`);
        } else if (error.response?.status === 401) {
          alert('Неверный пароль');
        }
      } else {
        console.error(error);
      }
    }
  };

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
        placeholder='password'
        name='password'
        value={inputs.password}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
      <div>
        <p>Forgot your password?</p>
      </div>
    </form>
  );
}
