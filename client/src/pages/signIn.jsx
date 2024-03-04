import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice';

export default function SignIn() {

  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('api/auth/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }

  };

  return (
    <div className='bg-white p-12 m-12 w-full md:w-3/4 h-auto shadow-lg absolute top-5vh left-1/2 transform -translate-x-1/2 flex items-center justify-center'>
      <div className='p-3 max-w-lg w-full '>
        <h1 className='text-4xl font-semibold lg:text-left text-center mb-2'>Welcome Back!!</h1>
        <h3 className='text-2xl lg:text-left font-light text-center mb-6'>"Unlock Your Learning Journey".</h3>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="email" placeholder='Email' className='text-lg py-2 px-3 rounded-full border-0 bg-white shadow-md mb-4' id='email' onChange={handleChange} />

            <input type="password" placeholder='Password' className='text-lg py-2 px-3 rounded-full border-0 bg-white shadow-md mb-4' id='password' onChange={handleChange} />

        <button disabled={loading} className='bg-yellow-400 text-white p-2 rounded-full uppercase w-full hover:opacity-70 disabled:opacity-50'>
          {loading ? 'Loading...' : 'Sign in'}
        </button>
        </form>
        <div className='flex p-1 mt-3'>
          <p className="text-center">Don't have an account? <Link to={'/sign-up'} className='text-yellow-500'>Sign Up</Link></p>
        </div>
        {error && <p className='text-red-500 mt-5 text-center'>{error}</p>}
      </div>
    </div>
  )
} 
