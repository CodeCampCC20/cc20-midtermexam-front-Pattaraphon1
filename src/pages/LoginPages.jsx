import { useState } from 'react'
import InputForm from '../component/InputForm';
import { schemaLogin } from '../validator/schemaLogin';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router';
import authApi from '../api/authApi';
import axios from 'axios';


const initialInput = {
  username: "",
  password: ""
}

function LoginPages() {
  const buttonStyle = 'btn btn-soft btn-success w-full';
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const [isLoading, setisLoading] = useState(false);

const navigate = useNavigate();


  const handleChange = (evt) => {
    const { id, value } = evt.target
    setInput(prev => ({ ...prev, [id]: value }))
    setInputError(prev => ({ ...prev, [id]: "" }))
  }

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setisLoading(true);

      schemaLogin.validateSync(input, { abortEarly: false })
      console.log(input)
      const res = await axios.post("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login",input);
      console.log(res.data);

      setInput(initialInput);
      navigate("/todo");

    } catch (error) {
      console.log(error);

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});

        setInputError(err);
      }
    } finally {
      setisLoading(false)
    }
  };

  return (
    <div className='p-8'>
      <div className='w-fit border mx-auto p-8 rounded-2xl bg-'>
        <h1 className='text-2xl mb-4 font-bold'>Welcome</h1>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <InputForm
            type='text'
            id="username"
            placeholder="Enter your username"
            onChange={handleChange}
            error={inputError.email}
          />
          <InputForm
            type='password'
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            error={inputError.password}
          />

          <button disabled={isLoading} className={buttonStyle}>Submit</button>

          <button className='font-bold hover:underline decoration-solid'>
            <Link to="/register">Register</Link>
            </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPages
