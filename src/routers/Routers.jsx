import {Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Home from '../pages/Home.jsx';
import Mens from '../pages/Mens.jsx';
import Womens from '../pages/Womens.jsx';
import Kids from '../pages/Kids.jsx';
import Sports from '../pages/Sports.jsx';

const Routers = () => {
  return (
    <Routes >
        <Route path='/' element = {<Navigate to="Home" />} />
        <Route path='home' element = {<Home />} />
        <Route path='mens' element = {<Mens />} />
        <Route path='womens' element = {<Womens />} />
        <Route path='kids' element = {<Kids />} />
        <Route path='sports' element = {<Sports />} />
        <Route path='login' element = {<Login />} />
        <Route path='signup' element = {<Signup />} />
    </Routes>
  )
}

export default Routers