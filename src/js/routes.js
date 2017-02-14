"use strict";

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import ContactMe from './components/ContactMe';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import Projects from './components/Projects';
import Styles from './components/Styles'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={AboutMe}/>
    <Route path="about" component={AboutMe}/>
    <Route path="blog" component={Blog}/>
    <Route path="contact" component={ContactMe}/>
    <Route path="projects" component={Projects}/>  
    <Route path="styles" component={Styles}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
);

export default routes;

