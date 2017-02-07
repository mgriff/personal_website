import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  render() {
    return (
      <p>Hello Matty!</p>
    );
  }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));