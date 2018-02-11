import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import UserPage from './Pages/User'

export const history = createHistory();
//console.log('Router', history.location.pathname);
//var url=history.location.pathname

const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path='/' component={Login} />
            <Route path='/Dashboard' component={Dashboard} /> 
            <Route path='/UserPage' component={UserPage} /> 
         

    

        </div>

    </Router>
);
export default Routes;

