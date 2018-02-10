require('es6-promise').polyfill();
require('isomorphic-fetch');

//User Login
export function fetchUserLoginFailed(bool) {
    return {
        type: 'USER_LOGIN_FAILURE',
        hasErrored: bool
    };
}
export function fetchUserLoginLoading(bool) {
    return {
        type: 'USER_LOGIN_LOADING',
        isLoading: bool
    };
}
export function fetchUserLoginSuccess(items) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        items
    };
}

export function UserLoginFetchData(url, payload) {
        return (dispatch) => {
       // console.log('User Login payload', payload);
        dispatch(fetchUserLoginLoading(true));
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                   // console.log(response.statusText);
                 //   console.log('User Login response 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchUserLoginLoading(false));
                return response;
            })
            .then(response => {
               // console.log('User Login response 4'+response);
                return response.json();
            })
            .then((eventData) => {
               // console.log(' User Login response 2', eventData);
                dispatch(fetchUserLoginSuccess(eventData));
            })
            .catch((err) => {
                // console.log('User Login response 3 error'+err);
                dispatch(fetchUserLoginFailed(true))
            }
            );
    };
  
}
