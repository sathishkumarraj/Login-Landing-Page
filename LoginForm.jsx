import React from 'react';
import { IoMdKey } from "react-icons/io";
import { RiLockPasswordLine, RiSpace } from "react-icons/ri";
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="wrapper">
        <form action="">
            <h1>Wecome Back!</h1>
            <div className="input-box">
                <label>E-mail</label>
                <input type="text"  required/>
            </div>
            <div className="input-box">
                <label>Password</label>     
                <input type="password" required/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me? </label>
                
            </div>

            <button type="submit">Login</button>

            <div className="side-link">
                <IoMdKey className='icon'/><a href="#">Login with email</a>
                <RiLockPasswordLine className='icon'/><a href="#">Forget password?</a>
            </div>

            

            <div className="register-link">
                <p>Don't have an account?<a href='#'>Register Now</a></p>
            </div>
        </form>
    </div>
  );
};

export default LoginForm