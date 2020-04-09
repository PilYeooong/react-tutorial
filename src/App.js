import React from 'react';

import 'App.css';
import Counter from 'Counter';
import PropTypes from "prop-types"

class App extends React.Component{
  state = {
    myquery: "",
    lang:"",
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
    console.log("changed value:" , value, this);
  };

  render() {
    return (
      <>
        <Counter onClick={() => console.log("clicked")}/>
        <input name="myquery" onChange={this.onChange} />
        <input name="lang" onChange={this.onChange} />
        <hr />
        {JSON.stringify(this.state)}
      </>
    );
  }
}

export default App;
