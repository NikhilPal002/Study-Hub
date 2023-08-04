import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Login = (props) => {

    // States for registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [login, setLogin] = useState(false);
    const [error, setError] = useState(false);

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setLogin(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setLogin(false);
    };

    // use it when the backend is hosted
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
    
        // set configurations
        const configuration = {
          method: "post",
          url: "https://study-material-backend.vercel.app/api/auth/login",
          data: {
            email,
            password,
          },
        };
    
        // make the API call
        axios(configuration)
          .then((result) => {
            // set the cookie
            cookies.set("TOKEN", result.data.token, {
              path: "/",
            });
            // redirect user to the auth page
            window.location.href = "/auth";
            setLogin(true);
            setError(false);
          })
          .catch((error) => {
            setLogin(false); // loginstate to false
            setError(true);     // Set error state to true
        });
      };

    // // Handling the form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (email === '' || password === '') {
    //         setError(true);
    //     } else {
    //         setLogin(true);
    //         setError(false);
    //     }
    // };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: login ? '' : 'none',
                }}>
                <h1>User successfully Logged In!!</h1>
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
                <h1 className='fill-alert'>*Please enter all the fields*</h1>
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

            <form onSubmit={(e) => handleSubmit(e)}>

                <label className="label">Email</label>
                <input placeholder="Enter your email " onChange={handleEmail} className="input"
                    value={email} type="email" />

                <label className="label">Password</label>
                <input placeholder="Password" onChange={handlePassword} className="input"
                    value={password} type="password" />

                <button onClick={handleSubmit} className="btn-login" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login