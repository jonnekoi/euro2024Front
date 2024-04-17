import React from 'react';
const Admin = () => {
  return (
      <div className="content-wrapper mb-10 mt-10">
        <div className="flex justify-center">
          <form className="form-container">
            <div>
              <input className="border rounded p-2 m-1" type="text" name="homeTeam" id="homeTeam" placeholder="Home team"/>
            </div>
            <div>
              <input className="border rounded p-2 m-1" type="text" name="awayTeam" id="awayTeam" placeholder="Away team"/>
            </div>
            <div>
              <input className="border rounded p-2 m-1" type="number" name="homeScore" id="homeScore" placeholder="Home score"/>
            </div>
            <div>
              <input className="border rounded p-2 m-1" type="number" name="awayScore" id="awayScore" placeholder="Away Score"/>
            </div>
            <div>
              <button className="border rounded px-4 py-2 bg-blue-500 text-white mt-2" type="submit" id="addMatchButton">Add match</button>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-10">
          <form className="form-container">
            <div>
              <input className="border rounded p-2 m-1" type="text" name="homeTeam" id="home" placeholder="Home team"/>
            </div>
            <div>
              <input className="border rounded p-2 m-1" type="text" name="awayTeam" id="away" placeholder="Away team"/>
            </div>
            <div>
              <input className="border rounded p-2 m-1" type="number" name="homeScore" id="homeResult" placeholder="Home score"/>
            </div>
            <div>
              <input className="border rounded p-2 m-1" type="number" name="awayScore" id="awayResult" placeholder="Away Score"/>
            </div>
            <div>
              <button className="border rounded px-4 py-2 bg-blue-500 text-white mt-2" type="submit" id="addResultButton">Add result</button>
            </div>
          </form>
        </div>
      </div>
  );
}
export default Admin;
