import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('api/auth/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
            const data = await res.json();
            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/sign-in');
        } catch (error) {
            setLoading(false);
            setError(data.message);
        }

    };

    return (
        <div className='bg-white p-12 m-12 w-full md:w-3/4 h-auto shadow-lg absolute top-5vh left-1/2 transform -translate-x-1/2 flex items-center justify-center'>
            <div className='p-3 max-w-lg w-full'>
                <h1 className='text-4xl font-semibold lg:text-left text-center mb-2'>Welcome on board!</h1>
                <h3 className='text-2xl lg:text-left font-light text-center mb-6'>Let's help you get onboard.</h3>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="flex flex-col">
                        <input type="text" placeholder='Username' className='text-lg py-2 px-3 rounded-full border-0 bg-white shadow-md mb-4' id='username' onChange={handleChange} />

                        <input type="text" placeholder='Department' className='text-lg py-2 px-3 rounded-full border-0 bg-white shadow-md mb-4' id='department' onChange={handleChange} />

                        <input type="password" placeholder='Password' className='text-lg py-2 px-3 rounded-full border-0 bg-white shadow-md mb-4' id='password' onChange={handleChange} />

                    </div>

                    <div className='flex flex-col'>
                        <input type="email" placeholder='Email' className='text-lg py-2 px-3 rounded-full border-0 bg-white shadow-md mb-4' id='email' onChange={handleChange} />

                        <input type="text" placeholder='Phone No.' className='text-lg py-2 px-3 rounded-full border-0 bg-white shadow-md mb-4' id='phoneNumber' onChange={handleChange} />
                    </div>

                    <button disabled={loading} className='bg-yellow-400 text-white p-2 rounded-full uppercase w-full hover:opacity-70 disabled:opacity-50'>
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>
                </form>
                <div className='flex p-1 mt-3'>
                    <p className="text-center">Already have an account? <Link to={'/sign-in'} className='text-yellow-500'>Sign in</Link></p>
                </div>
                {error && <p className='text-red-500 mt-5 text-center'>{error}</p>}
            </div>
        </div>

    )
}