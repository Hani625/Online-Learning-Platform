// src/components/Auth.js
import React, { useState } from 'react';
import { auth } from '../firebase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential.user);
      })
      .catch(error => console.error(error));
  };

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential.user);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Auth;