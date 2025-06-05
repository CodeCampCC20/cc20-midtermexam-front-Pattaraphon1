import { useState } from 'react'
import InputForm from '../component/InputForm'
import { useNavigate } from 'react-router';
import { schemaRegister } from '../validator/schemaLogin';
import axios from 'axios';
import * as Yup from "yup";

const initialInput = {
  username: "",
  password: "",
  confirmPassword: ""
}

function RegisterPages() {

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

      console.log(input)
      schemaRegister.validateSync(input, { abortEarly: false })
      console.log(input)
      const res = await axios.post("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/register",input);
      console.log(res.data);

      setInput(initialInput);
      alert("Register SuccessFull")
      navigate("/login");

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
        <h1 className='text-2xl mb-4 font-bold'>Register</h1>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <InputForm
            type='text'
            id="username"
            placeholder="Enter your username"
            onChange={handleChange}
            error={inputError.username}
          />
          <InputForm
            type='password'
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            error={inputError.password}
          />

           <InputForm
            type='password'
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            error={inputError.confirmPassword}
          />

          <button className='btn btn-soft btn-success w-full'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPages
