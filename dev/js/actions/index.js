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
    let ret = {};
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
          ret = {
            type: types.USERS_REQUEST,
            payload: response
          }
        })
        .catch(function (error) {
            ret = {
              types: types.USERS_FAILURE,
              payload: {}

            }
        });
}
