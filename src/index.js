import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import * as serviceWorker from './serviceWorker';

const domContainer = document.querySelector('#navbar');
  ReactDOM.render(
      <Router>
          <Routes/>
      </Router>
      , domContainer
    );

    serviceWorker.unregister();