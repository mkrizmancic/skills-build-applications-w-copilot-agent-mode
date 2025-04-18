import React from 'react';

const API_ENDPOINT = 'https://fantastic-happiness-5g75v5vgqg7cpqq-8000.app.github.dev/api/leaderboard';
// Use API_ENDPOINT in your fetch calls or other logic

const Leaderboard = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Leaderboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
