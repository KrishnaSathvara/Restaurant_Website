import React, { useState } from 'react';
import SignUp from './SignUp';
import { BrowserRouter, Route,Routes,Link} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login logic
    const saved = localStorage.getItem('username');
    const initialValue = JSON.parse(saved);
    const pass = localStorage.getItem("password");
    const pa = JSON.parse(pass)
    if (username === initialValue && password === pa) {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  
  

  return (

    <div className="flex items-center bg-blue-300 justify-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-6 text-center">Login </h1>
        {!loggedIn ? (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="">
              {/* <Link to="/"> */}
              <button
                className="bg-pink-600 hover:bg-blue-700 w-64 rounded-md  text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
              {/* </Link> */}
              
                {/* <div className='text-blue-500'> */}
                {/* <Link to="/Signup">SignUp</Link> */}
                  {/* <a href=''></a> */}
                {/* </div> */}
            </div>
                <div className="grid grid-cols-6 space-x-4 justify-center items-center p-4">
              <div className=" col-span-2 justify-center items-center  text-pink-500">
              <Link to="https://accounts.google.com/v3/signin/identifier?dsh=S-754373773%3A1684401574314707&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en-GB&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession">
                <i className="fa-brands fa-google text-lg text-center w-8 border-2 border-pink-500 rounded-full hover:bg-pink-500 hover:text-white"></i>
                </Link>
              </div>
              <div className="col-span-2   text-blue-800">
                {" "}
                <Link to="https://www.facebook.com/login/">
                <i className="fa-brands fa-facebook-f text-lg text-center w-8 border-2 border-blue-800 rounded-full text-blue hover:bg-blue-800 hover:text-white" ></i>
                </Link>
              </div>
              <div className="col-span-2   text-blue-500">
                {" "}
                <Link to="">
                <i className="fa-brands fa-linkedin-in text-lg text-center w-8 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white" ></i>
                </Link>
                
              </div>
              
            </div>
          <div className='text-center'>
          <h2>Need an account ? <Link to="/Signup" className='text-blue-500'>SIGNUP</Link></h2>
            </div>

          </div>
        ) : (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-center"><Link to="/">You are logged in!</Link></p>
            {/* Display logged-in content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

