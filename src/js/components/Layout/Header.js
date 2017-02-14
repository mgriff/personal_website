"use strict";

import React from 'react';

import Navigation from "./Header/Navigation"
import Title from "./Header/Title"

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Navigation />
      </div>
    );
  }
}