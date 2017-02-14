"use strict";

import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/blog/'>Blog</Link>
        <Link to='/projects/'>Projects</Link>
        <Link to='/contact/'>Contact me</Link>
        <Link to='/styles/'>Styles</Link>
      </ul>
    );
  }
}