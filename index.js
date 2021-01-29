import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import * as serviceWorker from './serviceWorker';
var e = React.createElement;
var domContainer = document.querySelector('#navbar');
ReactDOM.render(React.createElement(
    Router,
    null,
    React.createElement(Routes, null)
), domContainer);

serviceWorker.unregister();