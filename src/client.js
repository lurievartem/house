import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import getRoutes from './routes';
import createStore from './redux/createStore';

const rootElement = document.getElementById('root');
const store = createStore(browserHistory);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {getRoutes()}
        </Router>
    </Provider>,
    rootElement
);
