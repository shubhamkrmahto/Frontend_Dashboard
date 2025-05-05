import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Login() {

const {register,reset,handleSubmit} = useForm();

const navigate = useNavigate();

function onLogin(){

    navigate('/dashboard');
}

  return (
    <div>Login

        <form onSubmit={handleSubmit(onLogin)}>

        <div>
        <label htmlFor='un'>Enter UserName : </label>
        <input type='text' id='un' placeholder='Enter UserName' {...register('username')}></input>
        </div>

        <div>
            <label htmlFor='pass'>Enter Password : </label>
            <input type='text' id='pass' placeholder='Enter Password' {...register('password')}></input>
        </div>
        <button type='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login