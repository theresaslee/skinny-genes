import React, {Component} from 'react';
import Alert from '../components/Alert'
import UserList from './user-list';
import Patient from './patient';
import Traits from './traits';
import {connect} from 'react-redux';
require('../../scss/style.scss');

class App extends Component {

  render () {
    console.log(this.props)
    return (
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
    )

  }
};

function mapStateToProps(state) {
    return {
        users: state.userData.users,
        usersLoaded: state.userData.isLoaded,
        activeUser: state.activeUser
    };
}


export default connect(mapStateToProps)(App);
