import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App3 from 'App3';
import App4 from 'App4';
import App5 from 'App5';
import TodoList from 'TodoList';
import Prac from 'Prac';
import EpisodeList from 'EpisodeList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App5 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
