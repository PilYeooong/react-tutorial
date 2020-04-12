import React, { createContext } from 'react';

const MessageContext = createContext();

const App = () => (
  <MessageContext.Provider value="Provider Values">
    <Level1 message="Context API in React" />
  </MessageContext.Provider>
);

const Level1 = ({ message }) => <Level2 message={message} />;

const Level2 = ({ message }) => <Level3 message={message} />;

const Level3 = ({ message }) => {
  return (
    <div>
      <MessageContext.Consumer>
        {(message) => <>Level3: {message}</>}
      </MessageContext.Consumer>
    </div>
  )
};

export default App;
