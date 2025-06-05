import React, { useState } from 'react'

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const textStyle = {
    textDecoration : isChecked ? 'line-through' : 'none',
  }

  return (
    <div className='flex justify-between'>
      <label className="label">
        <input 
        type="checkbox" 
        className="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
        />
        <span className= {textStyle}>
        Value
        </span>
      </label>
      <button className='cursor-pointer border px-1.5 rounded bg-gray-900 hover:bg-gray-600 active:bg-gray-400 '>x</button>
    </div>
  )
}

export default Checkbox
