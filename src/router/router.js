import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';
import Home from '../components/screens/home';

const About = lazy(() => import('../components/screens/about'));
const Resume = lazy(() => import('../components/screens/resume'));
const Portfolio = lazy(() => import('../components/screens/portfolio'));
const Contact = lazy(() => import('../components/screens/contact'));

export default (
    <Switch>
        <Route exact path = { URL.HOME } component={ Home } />
        <Route exact path = { URL.ABOUT } component={ About } />
        <Route exact path = { URL.RESUME } component={ Resume } />
        <Route exact path = { URL.PORTFOLIO } component={ Portfolio } />
        <Route exact path = { URL.CONTACT } component={ Contact } />
    </Switch>
)