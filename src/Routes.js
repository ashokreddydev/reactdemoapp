import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

export const history = createHistory();
//console.log('Router', history.location.pathname);
//var url=history.location.pathname

const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path='/' component={Login} />
            <Route path='/Dashboard' component={Dashboard} /> 
         

    

        </div>

    </Router>
);
export default Routes;

