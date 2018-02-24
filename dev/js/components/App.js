import React from 'react';
import UserList from '../containers/user-list';
import Patient from '../containers/patient';
import Traits from '../containers/traits';
require('../../scss/style.scss');

const App = () => (
    <div className="container-fluid">
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <Patient />
        <h2>Traits</h2>
        <Traits type="allergies"/>
    </div>
);

export default App;
