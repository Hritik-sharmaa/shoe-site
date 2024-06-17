import {Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Home from '../pages/Home.jsx';

const Routers = () => {
  return (
    <Routes >
        <Route path='/' element = {<Navigate to="Home" />} />
        <Route path='home' element = {<Home />} />
        <Route path='login' element = {<Login />} />
        <Route path='signup' element = {<Signup />} />
    </Routes>
  )
}

export default Routers