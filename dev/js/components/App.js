import React from 'react';
import UserList from '../containers/user-list';
import Patient from '../containers/patient';
import Traits from '../containers/traits';
require('../../scss/style.scss');

const App = () => (
    <div className="container-fluid wrap">
        <h2>User List</h2>
        <UserList />
        <hr />
        <Patient />
        <hr />
        <Traits type="allergies"/>
        <hr />
        <Traits type="healthHistory"/>
    </div>
);

export default App;
