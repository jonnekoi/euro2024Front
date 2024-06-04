import React, { useState } from 'react';

const url = 'http://127.0.0.1:3000/v1';

const WinnerPage = ({ showWinnerPage, setShowWinnerPage }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const goBack = () => {
    setShowWinnerPage(false);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const sessionData = sessionStorage.getItem('user');
      if (!sessionData) {
        throw new Error('No user data found in sessionStorage');
      }

      const parseData = JSON.parse(sessionData);
      if (!parseData.username) {
        throw new Error('No username found in session data');
      }

      const username = parseData.username;
      const response = await fetch(`${url}/get/winner`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ winner: selectedOption, username: username }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error('Error submitting winner');
      }

      const data = await response.json();
      console.log('Winner submitted:', data);
    } catch (error) {
      console.error('Failed to submit winner:', error.message);
    }
  };

  return (
      <div>
        <h1 className="text-center">!!! You can only guess once !!!</h1>
        <div className="flex justify-center items-center">
          <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="m-10 border rounded px-4 py-2 bg-blue-500 text-white"
          >
            <option value="">Select an option</option>
            <option value="Albania">Albania</option>
            <option value="Austria">Austria</option>
            <option value="Belgium">Belgium</option>
            <option value="Croatia">Croatia</option>
            <option value="Czechia">Czechia</option>
            <option value="Denmark">Denmark</option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Hungary">Hungary</option>
            <option value="Italy">Italy</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Romania">Romania</option>
            <option value="Scotland">Scotland</option>
            <option value="Serbia">Serbia</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Spain">Spain</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Türkiye">Türkiye</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Greece">Greece</option>
            <option value="Iceland">Iceland</option>
            <option value="Wales">Wales</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
            </option>
            <option value="Estonia">Estonia</option>
            <option value="Finland">Finland</option>
            <option value="Israel">Israel</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Luxembourg">Luxembourg</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <button
              onClick={handleSubmit}
              className="border rounded px-4 py-2 bg-blue-500 text-white"
          >
            Submit
          </button>
        </div>
        <button
            onClick={goBack}
            className="m-10 border rounded px-4 py-2 bg-blue-500 text-white"
        >
          Go Back
        </button>
      </div>
  );
};

export default WinnerPage;
