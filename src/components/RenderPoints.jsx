import React, { useState, useEffect } from 'react';

const url = 'http://127.0.0.1:3000/v1';

const RenderPoints = () => {
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    const getPoints = async () => {
      try {
        const response = await fetch(url + '/get/points');
        if (!response.ok) {
          throw new Error("Error", response.statusText);
        }
        const rows = await response.json();
        setPointsData(rows.filter(row => row.username !== 'admin'));
      } catch (error) {
        console.error('Failed to fetch points:', error);
        setPointsData([{ username: 'Error loading points.', points: '' }]);
      }
    };

    getPoints();
  }, []);

  return (
      <table
          id="pointsTable"
          className="max-h-64 w-1/2 overflow-y-auto border-2 border-black ml-10">
          <thead className="bg-blue-500">
          <tr>
            <th className="text-center py-2 px-4 font-bold border-2 border-black">Username</th>
            <th className="text-center py-2 px-4 font-bold border-2 border-black">Points</th>
          </tr>
          </thead>
        <tbody>
        {pointsData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-500">
              <td className="text-center py-2 px-4 border-2 border-black">{row.username}</td>
              <td className="text-center py-2 px-4 border-2 border-black">{row.points}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

export default RenderPoints;
