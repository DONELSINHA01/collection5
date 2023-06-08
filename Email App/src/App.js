// App.js
import React from 'react';
import Nav from './Components/Nav';
import './App.css';
import Inbox from './Components/Inbox';
import Email from './Components/Email';
import { Provider } from 'react-redux';
import myStore from './Store';
const App = () => {

  return (
    <Provider store = {myStore}>
      <div className="app">
        <Nav />
        <Inbox />
        <Email />

      </div>

    </Provider>

  );
};

export default App;
