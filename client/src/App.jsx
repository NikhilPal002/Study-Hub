import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import PrivateRoute from './pages/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* <Route element={<PrivateRoute />} > */}
        <Route path="/" element={<Home />} />
        {/* </Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}
