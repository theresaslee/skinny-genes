const axios = require('axios');

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            console.log('Sample Axios Call');
            console.log(response);
        })
        .catch(function (error) {
            console.log('Axios Call Gone Wrong');
            console.log(error);
        });

    return {
        type: 'USER_SELECTED',
        payload: user
    }
};