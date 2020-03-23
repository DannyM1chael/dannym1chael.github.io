import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';
import Home from '../components/screens/home';

const About = lazy(() => import('../components/screens/sections/about'));
const Resume = lazy(() => import('../components/screens/sections/resume'));
const Portfolio = lazy(() => import('../components/screens/sections/portfolio'));
const Contact = lazy(() => import('../components/screens/sections/contact'));

export default (
    <Switch>
        <Route path = '/' component={ Home } />
        <Route path = { URL.ABOUT } component={ About } />
        <Route path = { URL.RESUME } component={ Resume } />
        <Route path = { URL.PORTFOLIO } component={ Portfolio } />
        <Route path = { URL.CONTACT } component={ Contact } />
    </Switch>
)