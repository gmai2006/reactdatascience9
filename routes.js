import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './navbar';
import Home from './views/home/home';
import About from './views/about/about';

export var Routes = function Routes() {
    return React.createElement(
        'div',
        null,
        React.createElement(NavBar, null),
        React.createElement(
            Switch,
            null,
            React.createElement(Route, { exact: true, path: 'Home', component: Home }),
            React.createElement(
                Route,
                { exact: true, path: '/' },
                React.createElement(Redirect, { to: 'Home' })
            ),
            React.createElement(Route, { exact: true, path: 'About', component: About })
        )
    );
};