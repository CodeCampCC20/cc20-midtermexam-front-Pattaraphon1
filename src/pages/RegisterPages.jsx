import React from 'react'
import InputForm from '../component/InputForm'

function RegisterPage({buttonStyle,handleSubmit,handleChange}) {
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
          />
          <InputForm
            type='password'
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

           <InputForm
            type='password'
            id="confirmpassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <button className='btn btn-soft btn-success w-full'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
