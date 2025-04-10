import React from 'react';

const Activities = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Running</td>
            <td>30 mins</td>
            <td><button className="btn btn-primary">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
