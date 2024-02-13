// import React from 'react'
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

type InputsType = {
  email: string;
  username: string;
  password: string;
};

export default function Form(): JSX.Element {
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
        inputs
      );
      if (result) {
        console.log('succes registration');
        setInputs({ email: '', username: '', password: '' });
        navigate('/userPage');
      } else {
        throw new Error();
      }
    } catch (error) {
      alert(`registration error: this user already exist`);
    }
  };
  // const result = await aiost post
  return (
    <form onSubmit={handleAdd}>
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
