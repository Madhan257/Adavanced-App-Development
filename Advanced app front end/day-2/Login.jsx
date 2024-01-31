import  { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
// import Home from './Home';
import img from "../assets/detail-rice-plant.jpg"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', {
        username,
        password,
      });

      // Handle successful login, e.g., set authentication token in local storage
      console.log('Login successful:', response.data);

      // Redirect or perform any additional actions here
    } catch (error) {
      // Handle login failure, e.g., display an error message
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <img src={img} className='bgimg' alt="background"></img>

      <form className='logfor' onSubmit={handleLogin}>
        <h3><b>Login Here</b></h3>

        <label className='loginl'>Username</label>
        <input
          type="text"
          placeholder="Enter your Username"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />

        <label className='loginl'>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />

        <center><button className='loggbutttt'type="submit"><Link to={"/Home"}> Login</Link></button></center>
        <br />
        <center><p>Create an account !<Link to={"/Signup"}>  Sign up</Link></p></center>
      </form>
    </div>
  );
}

export default Login;
