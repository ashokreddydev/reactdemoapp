import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Get

import { fetchUserLoginFailed, fetchUserLoginLoading, fetchLogin } from './Admin';



const rootReducer = combineReducers({
  fetchUserLoginFailed,
  fetchUserLoginLoading,
  fetchLogin,
  form: formReducer

})
export default rootReducer;




