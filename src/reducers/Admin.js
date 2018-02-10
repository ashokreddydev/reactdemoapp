const INITIAL_STATE1 = { source:[],error:[],recon:[],success:[]}

// User Login
export function fetchUserLoginFailed(state = false, action) {
    switch (action.type) {
        case 'USER_LOGIN_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchUserLoginLoading(state = false, action) {
    switch (action.type) {
        case 'USER_LOGIN_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchLogin(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}