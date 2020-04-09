import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
  }
  state = {

  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        Counter
      </div>
    );
  }
}

export default Counter;