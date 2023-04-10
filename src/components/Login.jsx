import React, { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from './ThemeContext'

function Login() {
    const [userName, setUserName] = useState('')
    const navigate = useNavigate();
    const context = useContext(ThemeContext);
    const handleLogin = () => {
        if (userName === 'admin') {
            context.setCheckLogin('Logged')
            navigate('/')
        }
    }
    return (
        <div className='login-page'>
            <div className='top'>
                <div id='rectangle'>
                    <div></div>
                    <div></div>
                </div>
                <div className='form'>
                    <h2>Sign In</h2>
                    <span>Username</span>
                    <input value={userName} type="text" onChange={(e) => { setUserName(e.target.value) }} />
                    <button onClick={handleLogin}>Sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Login;