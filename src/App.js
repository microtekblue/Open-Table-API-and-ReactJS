//Author: Asim Ahmad
//Date: May 1, 2019
//info@microtekblue.com

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App1">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Open Table API with ReactJS </h1>
            <section id="form">
              <Form />
          </section>
      </header>
    </div>
  );
}

export default App;
