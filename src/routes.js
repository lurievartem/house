import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { About, App, Root, Home, NotFound } from './containers';

export default () => (
    <Route path="/" component={Root}>
        <Route component={App}>
            {/* Home (main) route */}
            <IndexRoute component={Home} />

            <Route path="about" component={About} />
        </Route>
        <Route path="*" component={NotFound} status={404} />
    </Route>
);
