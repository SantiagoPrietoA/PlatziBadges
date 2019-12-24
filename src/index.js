

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

// import Badge from './components/Badge.jsx';

import App from './components/App.jsx';


const container = document.getElementById('app');
ReactDOM.render(
    <App/>,
    container
    );
