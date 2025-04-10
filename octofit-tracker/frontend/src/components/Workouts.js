import React from 'react';

const API_ENDPOINT = 'https://fantastic-happiness-5g75v5vgqg7cpqq-8000.app.github.dev/api/workouts';
// Use API_ENDPOINT in your fetch calls or other logic

const Workouts = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Workouts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Workout</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yoga</td>
            <td>Morning yoga session</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;
