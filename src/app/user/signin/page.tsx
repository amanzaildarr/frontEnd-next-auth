"use client"
import apiService from '@/api/api.service';
import ApiRoutes from '@/api/enums/api.routes.enums';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Router = useRouter()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        apiService.post<{ token: string }>(ApiRoutes.Login, { email: username, password })
        .then(response => {
            console.log('ress::::', response)
        })
        .catch(err=>{
            console.log('err::',err)
        })
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={() => Router.push("/user/signup")}>SignUp</button>
            </form>
        </div>
    );
};

export default LoginPage;
