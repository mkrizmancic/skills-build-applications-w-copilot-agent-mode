import React from 'react';

const Teams = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Teams</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Blue Team</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
