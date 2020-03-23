import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import theRoutes from './router/router';
import './index.sass';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App>
             {theRoutes }
        </App> 
    </BrowserRouter>, document.getElementById('root'));
