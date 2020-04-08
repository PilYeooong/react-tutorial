import React from 'react';

import 'App.css';
import { Button } from 'antd';

const actions = {
  init(initialValue) {
    return { value: initialValue };
  },
  increment(prevState) {
    return { value: prevState.value + 1};
  },
  decrement(prevState){
    return { value: prevState.value - 1};
  },
};

class Counter1 extends React.Component {
  state = actions.init(this.props.initialValue);
  
  // constructor(props) {
  //   super(props);
  //   this.state = actions.init(this.props.initialValue);
  // }

  render() {
    const { value } = this.state;
    return (
      <div>
        Counter1: {value}
        <Button onClick={() => this.setState(actions.increment)}>+1</Button>
        <Button onClick={() => this.setState(actions.increment)}>-1</Button>
      </div>
    );
  }
}


function App() {
  return (
    <div>
      <Counter1 initialValue={10}></Counter1>
    </div>
  );
}

export default App;
