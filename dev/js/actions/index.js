import * as types from '../constants.js'
import axios from 'axios';

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);

    return {
        type: types.USER_SELECTED,
        payload: user
    }
};

export const getUserInfo = () => {
      // Make a request for a user with a given ID
    const userInfo = axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          return {
            type: types.USERS_REQUEST,
            payload: response.data
          }
        })
        .catch(function (error) {
            return {
              type: types.USERS_FAILURE,
              payload: {}

            }
        });
    return userInfo
}
