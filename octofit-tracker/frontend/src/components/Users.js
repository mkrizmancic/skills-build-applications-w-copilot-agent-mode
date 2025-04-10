import React from 'react';

const API_ENDPOINT = 'https://fantastic-happiness-5g75v5vgqg7cpqq-8000.app.github.dev/api/users';
// Use API_ENDPOINT in your fetch calls or other logic

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
