import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username);

        history.push('/main');
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="button">Enviar</button>
            </form>
        </div>
    );
}