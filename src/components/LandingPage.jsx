import React from 'react';
import LoginForm from './loginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

const LandingPage = ({ setIsLoggedIn }) => {
  return (
      <>
        <div>
          <h1 className="text-6xl">Euro 2024</h1>
          <LoginForm setIsLoggedIn={setIsLoggedIn}/>
          <RegisterForm setIsLoggedIn={setIsLoggedIn}/>
        </div>
      </>
  );
};

export default LandingPage;
