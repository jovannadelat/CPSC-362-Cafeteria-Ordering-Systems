import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'; // make sure to import the CSS file

import user_icon from '../../assets/LoginSignup/person.png'
import email_icon from '../../assets/LoginSignup/email.png'
import password_icon from '../../assets/LoginSignup/password.png'

const LoginSignup = () => {
    const [action, setAction] = useState('Login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, pwd: password }),
            });

            const data = await response.json();
            if (response.ok) {
                setError('');
                setAction('Login');
            } else {
                setError(data?.message || 'Signup failed');
            }
        } catch (err) {
            setError('Signup error');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, pwd: password }),
            });

            const data = await response.json();
            if (response.ok) {
                setError('');
                navigate('/home');
            } else {
                setError(data?.message || 'Login failed');
            }
        } catch (err) {
            setError('Login error');
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h2 className="text">{action === 'Login' ? 'Login' : 'Sign Up'}</h2>
                <div className="underline"></div>
            </div>
            <form className="inputs" onSubmit={(e) => e.preventDefault()}>
                <div className="input">
                    <img src={email_icon} alt="email" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="password" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="forgot-password">{error}</p>}
                <div className="submit-container">
                    <button 
                        className="submit"
                        onClick={action === 'Login' ? handleLogin : handleSignup}
                    >
                        {action === 'Login' ? 'Login' : 'Sign Up'}
                    </button>
                </div>
                <p className="forgot-password">
                    {action === 'Login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <span onClick={() => setAction(action === 'Login' ? 'Sign Up' : 'Login')}>
                        {action === 'Login' ? 'Sign Up' : 'Login'}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginSignup;
