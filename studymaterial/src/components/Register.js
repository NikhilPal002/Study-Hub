import React from 'react'
import { useState } from 'react';
import axios from "axios";


const Register = () => {

    // States for registration
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [register, setRegister] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setRegister(false);
    };

    // Handling the Department change
    const handleDepartment = (e) => {
        setDepartment(e.target.value);
        setRegister(false);
    }
    // Handling the PhoneNumber change
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
        setRegister(false);
    }

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setRegister(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setRegister(false);
    };


    // use this when the backend is hosted on heroku
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
    
        // set configurations
        const configuration = {
          method: "post",
          url: "https://study-material-backend.vercel.app/api/auth/register",
          data: {
            name,
            department,
            phoneNumber,
            email,
            password,
          },
        };
    
        // make the API call
        axios(configuration)
          .then((result) => {
            setRegister(true);
            setError(false);
          })
          .catch((error) => {
            setRegister(false); // Set register state to false
            setError(true);     // Set error state to true
        });
      };


    // Handling the form submission  
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (name === '' || department === '' || phoneNumber === '' || email === '' || password === '') {
    //         setError(true);
    //     } else {
    //         setRegister(true);
    //         setError(false);
    //     }
    // };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: register ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1 className='fill-alert'>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">


            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form onSubmit={handleSubmit}>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                    value={name} type="text" />

                <label className="label">Department</label>
                <input onChange={handleDepartment} className="input"
                    value={department} type="text" />

                <label className="label">Phone Number</label>
                <input onChange={handlePhoneNumber} className="input"
                    value={phoneNumber} type="text" />

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />

                <button className="btn" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;