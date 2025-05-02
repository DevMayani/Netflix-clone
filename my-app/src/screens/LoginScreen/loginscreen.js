import React, { useState } from "react";
import styles from "./loginscreen.css";
import SignInScreen from "../SignUpScreen/signupscreen";

const Loginscreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      
      <div className="loginScreen_background">
        <img
          src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
          alt=""
          className="loginScreen_logo"
        />
        <button 
        onClick={() => setSignIn(true)}
        className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
      {
        signIn ? (
          <SignInScreen />
        ) : (
          <>
          <h1>Unlimited files, TV programmes and more</h1>
          <h2>Watch anywhere.Cancel at any time</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership
          </h3>

          <div className="loginScreen_input">
            <form>
              <input type="email" placeholder="Email Address" className="loginScreen_input"/>
              <button 
              onClick={() => setSignIn(true)}
              className="loginScreen_getStarted">GET STARTED</button>
            </form>
          </div>
        </>
        )
      }
       
      </div>
    </div>
  );
};

export default Loginscreen;
