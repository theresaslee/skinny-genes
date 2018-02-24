import * as types from '../constants.js'

const userState = {
  users: [],
  isLoaded: false,
}

const userInfo = function userInfo (state = userState, action = {}) {
  switch (action.type) {
    case types.USERS_REQUEST:
    return {
      ...state,
      users: action.payload,
      isLoaded: true
    }
    case types.USER_FAILURE:
      return state
    default:
      return state
    }
}

export default userInfo