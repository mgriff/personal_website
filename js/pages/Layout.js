import React from 'react';
import {render} from 'react-dom';

class Layout extends React.Component {
  render () {
    return <p> Hello Matthew!</p>;
  }
}

render(<Layout/>, document.getElementById('app'));