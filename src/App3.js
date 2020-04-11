import React from "react";
import ErrorBoundary from "ErrorBoundary";


class Message extends React.Component {
  render() {
    return (
      "Message Component"
    );
  }
}

class App3 extends React.Component {
  render() {
    throw new Error("의도한 에러");
    return (
      <ErrorBoundary>
        <Message />
        히히
      </ErrorBoundary>
    )
  }
}
export default App3;