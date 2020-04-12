import React, { createContext } from 'react';
import { useContext } from 'react';

const MessageContext = createContext();

const App = () => (
  <MessageContext.Provider value="Provider Values">
    <Level2Wrapper />
  </MessageContext.Provider>
);

// const Level2Wrapper = () => {
//   return (
//     <div>
//       <MessageContext.Consumer>
//         {(message) => <Level2 message={message} />}
//       </MessageContext.Consumer>
//     </div>
//   )
// };

const Level2Wrapper = () => {
  const message = useContext(MessageContext); //getter
  return (
    <div>
      <Level2 message={message} />
    </div>
  )
};

const Level2 = ({message}) => {
  return (
    <div>
      Level2: {message}
    </div>
  )
};

export default App;
