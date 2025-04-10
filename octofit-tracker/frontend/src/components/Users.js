import React from 'react';

const Users = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>johndoe</td>
            <td>johndoe@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
