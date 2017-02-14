"use strict";

import React from 'react';

import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}