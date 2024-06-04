import React, {useState} from 'react';
import RenderMatches from './RenderMatches.jsx';
import RenderPoints from './RenderPoints.jsx';
import WinnerPage from './WinnerPage.jsx';

const MainContent = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [showWinnerPage, setShowWinnerPage] = useState(false);

  if (!user) {
    return <div className="text-3xl font-bold" >Reload the page to login!</div>;
  }

  const username = user.username;

  const handleClick = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    window.location.href = '/';
  }

  const winnerPage = () => {
    setShowWinnerPage(true);
  }

  return (
      <>
        <div className="">
          <button onClick={handleClick} className="m-10 border rounded px-4 py-2 bg-blue-500 text-white">LogOut</button>
          <button onClick={winnerPage} className="m-10 border rounded px-4 py-2 bg-blue-500 text-white">Winner</button>
        </div>
        <div className="flex justify-center content-container">
          {showWinnerPage ? (
              <WinnerPage showWinnerPage={showWinnerPage} setShowWinnerPage={setShowWinnerPage} />
          ) : (
              <>
                <RenderMatches user={username}/>
                <RenderPoints user={username}/>
              </>
          )}
        </div>
      </>
  )
};

export default MainContent;
