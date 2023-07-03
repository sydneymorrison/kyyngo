import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="authPageContainer">
      <h1 className="authTitle">kyyngo</h1>
      <div className="loginFormContainer">
      <button className="singUpFormButton" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm className="signUpFormComponent" setUser={setUser} />
          :
          <LoginForm className="loginFormComponent" setUser={setUser} />
      }
    </div>
      <h1 className="authTitle2">kyyngo</h1>
      <h1 className="authTitle3">kyyngo</h1>
    </main>
  );
}