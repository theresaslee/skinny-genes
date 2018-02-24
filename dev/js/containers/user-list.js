import React, {Component} from 'react';
import Loader from 'react-loader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUserInfo, selectUser} from '../actions/index'


class UserList extends Component {
    componentWillMount () {
      this.props.getUserInfo()
    }
    renderList() {
        return this.props.userData.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.name}
                </li>
            );
        });
    }

    render() {
        return (
            <Loader loaded={this.props.userData.isLoaded}>
              <ul>
                  {this.renderList()}
              </ul>
            </Loader>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    console.log(state)
    return {
        userData: state.userData
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({getUserInfo}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
