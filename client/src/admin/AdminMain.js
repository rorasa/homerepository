import React, { Component } from 'react';

class AdminMain extends Component {
  render(){
    return(
      <div>
        <h1>Admin Panel</h1>

        <h2><a href="/client/admin/collection">Manage Collections</a></h2>
        <p>Create, manage, and change collecitons and their categories.</p>

        <h2><a href="/client/admin/storage">Manage Storage</a></h2>
        <p>Manage storage locations and devices.</p>

        <h2><a href="/client/admin/user">Manage Users</a></h2>
        <p>Create, manage, and edit user accounts.</p>

      </div>
    );
  }
}

export default AdminMain;
