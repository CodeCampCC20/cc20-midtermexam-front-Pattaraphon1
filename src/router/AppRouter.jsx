import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import PostPages from '../pages/PostPages'
import MainLayout from '../layouts/MainLayout'
import LoginPages from '../pages/LoginPages'
import TodoPages from '../pages/TodoPages'
import RegisterPage from '../pages/RegisterPages'


function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element ={<PostPages/>}/>
          <Route path ="login" element={<LoginPages/>}/>
          <Route path ="todo" element={<TodoPages />}/>
          <Route path ="register" element={<RegisterPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
