import React from 'react'
import { NavLink } from 'react-router'

function Navbar(){
const navInfo = [
  {id: 1, text: "Home", path: "/"},
  {id: 2, text: "Login", path: "login"},
  {id: 3, text: "TodoList", path: "todo"},
  {id: 4, text: "Register", path: "register"},
]
  return (
    <div className='flex gap-5 navbar bg-base-100 shadow-sm justify-center py-3'>
      {navInfo.map(item => (
          <NavLink className="btn btn-ghost text-xl" key={item.id} to={item.path}>{item.text}</NavLink>
      ))}
    </div>
  )
}

export default Navbar
