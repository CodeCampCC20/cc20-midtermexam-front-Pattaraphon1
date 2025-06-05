import React from 'react'

function InputForm({
  id,
  placeholder,
  type = 'text',
  onChange,
  value,
  error
}) {

  return (
    <div>
      <input className={`px-4 py-2 rounded border ${error ? "outline-1 outline-red-500" : "outline-gray-200"}`}
      id={id}
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
      {error &&<p className='text-xs text-red-500'>{error}</p>}
    </div>
  )
}

export default InputForm
