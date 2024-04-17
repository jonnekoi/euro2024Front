import React from 'react';
import LoginForm from './loginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

const LandingPage = ({ setIsLoggedIn }) => {
  return (
      <>
        <div>
          <LoginForm setIsLoggedIn={setIsLoggedIn}/>
          <RegisterForm setIsLoggedIn={setIsLoggedIn}/>
        </div>
      </>
  );
};

export default LandingPage;
