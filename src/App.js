import React from 'react';

import 'App.css';
import Counter from 'Counter';
import Message from 'Message';
import Profile from "Profile";
import PropTypes from "prop-types"

class App extends React.Component{
  render() {
    return (
      <div>
        <Message />
        <Profile />
        <Counter />
        <Counter color="green" />
        <Counter color="blue" />
      </div>
    )
  }
}

export default App;
