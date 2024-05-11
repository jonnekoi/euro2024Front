import React from 'react';
import RenderMatches from './RenderMatches.jsx';
import RenderPoints from './RenderPoints.jsx';

const MainContent = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  if (!user) {
    return <div className="text-3xl font-bold" >Reload the page to login!</div>;
  }

  const username = user.username;

  const handleClick = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
      <>
        <div className="">
          <button onClick={handleClick} className="m-10 border rounded px-4 py-2 bg-blue-500 text-white">LogOut</button>
        </div>
        <div className="flex justify-center content-container">
          <RenderMatches user={username}/>
          <RenderPoints user={username}/>
        </div>
      </>
  )
};

export default MainContent;
