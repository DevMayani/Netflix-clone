import React, { useRef } from 'react';
import styles from './signupscreen.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // <-- NEW imports

const Signupscreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign Up</h1>
        <input 
          ref={emailRef}
          placeholder='Email' type='email' />
        <input 
          ref={passwordRef}
          placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signUpScreen_gray'>New to Netflix?</span>
          <span className='signUpScreen_link' onClick={register}>Sign Up now</span>
        </h4>
      </form>
    </div>
  );
};

export default Signupscreen;
