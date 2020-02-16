import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';

import HomePage from "./pages/homepage/homepage.component"

const HatsPage = () => (
  <div>
    <h2>HatsPage</h2>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
