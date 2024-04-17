import React, { useState, useEffect } from 'react';

const url = 'http://localhost:3000/v1';
const RenderMatches = ({ user}) => {
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    try {
      const response = await fetch(`${url}/get/matches/${user}`);
      if (!response.ok) {
        throw new Error("Error", response.statusText);
      }
      const rows = await response.json();
      setMatches(rows);
    } catch (error) {
      console.error('Failed to fetch matches:', error);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  const submitGuess = async (matchId, guess) => {
    const username = user;

    console.log(guess)
    const guessFormat = /^\d+-\d+$/;
    if (!guessFormat.test(guess)) {
      alert('Enter a correct score for example 2-2');
      return;
    }

    try {
      const response = await fetch(url + '/get/points', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ matchId, guess, username })
      });

      if (!response.ok) {
        throw new Error('HTTP error! Status: ' + response.status);
      }
    } catch (error) {
      console.error('Error submitting guess:', error);
    }
  };

  return (
      <table className="max-h-64 w-1/2 overflow-y-auto border-2 border-black m-10">
        <thead className="bg-gray-300">
        <tr>
          <th className="text-center py-2 px-4 font-bold border-2 border-black">Home Team</th>
          <th className="text-center py-2 px-4 font-bold border-2 border-black">Away Team</th>
          <th className="text-center py-2 px-4 font-bold border-2 border-black">Result</th>
          <th className="text-center py-2 px-4 font-bold border-2 border-black">Your Guess</th>
          <th className="text-center py-2 px-4 font-bold border-2 border-black">Guess</th>
          <th className="text-center py-2 px-4 font-bold border-2 border-black">Submit</th>
        </tr>
        </thead>
        <tbody>
        {matches.map((match) => (
            <tr key={match.id} className="hover:bg-gray-500">
              <td className="text-center py-2 px-4 border-2 border-black">{match.homeTeam}</td>
              <td className="text-center py-2 px-4 border-2 border-black">{match.awayTeam}</td>
              <td className="text-center py-2 px-4 border-2 border-black">{match.homeScore}-{match.awayScore}</td>
              <td className="text-center py-2 px-4 border-2 border-black">{match.guess}</td>
              <td className="text-center py-2 px-4 border-2 border-black">
                <input type="text" name="guess" placeholder="e.g. 1-1" className="light-border guess-input" />
              </td>
              <td className="text-center py-2 px-4 border-2 border-black">
                {!match.guess && (
                    <button
                        type="button"
                        className="border rounded px-4 py-2 bg-blue-500 text-white mt-2"
                        onClick={(event) => {
                          const guess = event.target.parentElement.previousElementSibling.firstElementChild.value;
                          submitGuess(match.id, guess);
                        }}
                    >
                      Submit Guess
                    </button>
                )}
              </td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

export default RenderMatches;

