import React from 'react';
import Alert from './Alert'
import UserList from '../containers/user-list';
import Patient from '../containers/patient';
import Traits from '../containers/traits';
require('../../scss/style.scss');

const App = () => (
    <div className="container-fluid wrap">
        <h2>User List</h2>
        <UserList />
        <br />
        <Patient />
        <br />
        <Alert />
        <Traits type="allergies"/>
        <br />
        <Traits type="healthHistory"/>
    </div>
);

export default App;
