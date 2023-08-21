"use client"
import React, { useState } from 'react'
import './Login.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSignIn = (e : any) => {
    e.preventDefault();
    // Perform credential validation logic here
      alert(username);

      if(password){
        router.push('/')
      }
    
  };
  return (
    <>
      <div>LogIn Page</div>
        <br /><br />
        <button className="blue-button" onClick={() => signIn('google')}>SignIN with Google</button>
        <br/>
        OR
        <br/>
        <hr />
        <button className="blue-button" onClick={() => signIn('google')}>SignIN with Apple</button>
        <br/>
        OR
        <hr />
      <form>
        <br /><br />
        User name<input type='text' name='Username' onChange={(e) => setUsername(e.target.value)} />
        <br /><br />
        Password<input type='text' name='password' onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button className="green-button" type='submit' onClick={(e)=>handleSignIn}>SignIn</button>

      </form>
    </>
  )
}
