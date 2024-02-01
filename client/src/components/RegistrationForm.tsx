// import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function RegistrationForm(): JSX.Element {
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    passsword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>): void => {
    try {
      const response = await axios.post('http://localhost:3000/reg', inputs);
      if(response)
    } catch (error) {}
  };

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
        value={inputs.passsword}
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
}
