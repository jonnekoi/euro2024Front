import React, {useState} from 'react';
import RenderMatches from './RenderMatches.jsx';
import RenderPoints from './RenderPoints.jsx';

const MainContent = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const username = user.username;

  const handleClick = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    window.location.href = '/';
  }


  return (
      <>
        <div className="flex justify-center items-center">
          <h1 className="text-6xl">Euro 2024</h1>
          <button onClick={handleClick} className="ml-10 border rounded px-4 py-2 bg-blue-500 text-white">LogOut</button>
        </div>
        <div className="flex justify-center">
          <RenderMatches user={username}/>
          <RenderPoints user={username}/>
        </div>
      </>

  )
};

export default MainContent;
