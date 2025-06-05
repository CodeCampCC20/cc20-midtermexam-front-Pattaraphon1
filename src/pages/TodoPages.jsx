import React, { useState } from 'react'
import InputForm from '../component/InputForm'
import { Rocket } from 'lucide-react';
import Checkbox from '../component/Checkbox';

function TodoPages({handleChange}) {
const [task,setTask] = useState([]);
const [newtask,setNewTask] = useState("");

  return (
    <div className='p-8 bg-purple-950 h-screen'>
    <fieldset className="gap-3 mx-auto fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4"> 
      <div className='flex justify-between'>
        
      <h1 className='text-2xl mb-4 font-bold'>My Todo</h1>
      <div className='rounded bg-gray-700 w-7 h-8 justify-center items-center flex'>
      <Rocket className='w-5 ' />
      </div>
      </div>
      <div className='flex justify-between'>
      <InputForm
        id="text"
        placeholder="new task"
        formInputStyle='border-b p-1.5'
        onChange={handleChange}
      />
      <button className='cursor-pointer border p-1 rounded hover:bg-gray-600 active:bg-gray-400'>
        Add</button>
      </div>
      </fieldset> 
    </div>
  )
}

export default TodoPages

