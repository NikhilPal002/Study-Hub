import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const { currentUser } = useSelector(state => state.user);

  return (
    <div>
      <header className='bg-yellow-400 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4' >
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Study</span>
            <span className='text-slate-700'>Hub</span>
          </h1>
        </Link>
        
        <ul className='flex gap-4 items-center'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline text-lg font-mono'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline text-lg font-mono'>About</li>
          </Link>
          
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.avatar} alt='profile' className='w-8 h-8 rounded-full object-cover' />
            ) : (
              <li className='text-slate-700 text-lg font-mono hover:underline'>SignIn</li>
            )}

          </Link>
        </ul>
      </div>
    </header>
    </div>
  )
}

export default Header

