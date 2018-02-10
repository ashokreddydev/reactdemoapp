import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Routes from "./Routes";

const store = configureStore();
//console.log(this.props)

ReactDOM.render(<Provider store={store}>
    <Routes />
</Provider>, document.getElementById('root'));
registerServiceWorker();