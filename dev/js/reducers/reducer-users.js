import * as types from '../constants.js'


const userState = {
  users: [],
  isLoaded: false,
}
/*
export default function () {
    return [
        {
            id: 1,
            first: "Bucky",
            last: "Roberts",
            age: 71,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg",
            dob: "11.03.1989",
            gender: "M",
            height: "6'0\"",
            allergies: {
                "title": "Allergies",
                "list": ["Apples", "Vitamins", "AAA Batteries"]
            }
        },
        {
            id: 2,
            first: "Joby",
            last: "Wasilenko",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://i.imgur.com/52xRlm8.png",
            dob: "11.03.1990",
            gender: "M",
            height: "6'0\"",
            allergies: {
                "title": "Allergies",
                "list": ["Benadryl"]
            }
        },
        {
            id: 3,
            first: "Madison",
            last: "Williams",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png",
            dob: "11.03.1992",
            gender: "F",
            height: "6'0\"",
            allergies: {
                "title": "Allergies",
                "list": ["Hello Kitty"]
            }
        }
    ]
}
*/

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