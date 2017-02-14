"use strict";

import React from 'react';
import { Link } from 'react-router';

export default class PageNotFound extends React.Component {
  
  render() {
    return (
      <div className="pagenotfound">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go to home</Link>
      </div>
    );
  }
}