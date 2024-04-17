import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage.jsx';
import MainContent from './components/MainContent.jsx';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user');
    if (token && user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
      <>
        {isLoggedIn ? (
            <MainContent/>
        ) : (

            <LandingPage setIsLoggedIn={setIsLoggedIn}/>
        )}
      </>
  );
};

export default Home;
